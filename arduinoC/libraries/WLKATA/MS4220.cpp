#include "MS4220.h"

MS4220_UART::MS4220_UART(){
	
}

/*
  @说明	设置的通讯相关参数
  @参数	*p		串口号
  @参数	addr	设备地址，范围：1-247，0为广播地址
							如果该串口只有一个设备，可以不设置地址，或将地址设为-1
  @返回 无
*/
void MS4220_UART::init(HardwareSerial *p, int addr){
	pSerial = p;
	address = addr;
}

/*
  @说明	设置最大应答时间，回调函数
  @参数	time	最大应答时间，单位：毫秒
  @参数	_func	回调函数名称，用于应答超时后调用的函数
  @返回 无
*/
void MS4220_UART::setCallbackFunction(void (*_func)(String, int), uint32_t time){
	ackMaxTime = time;
	func = _func;
}

/*
  @说明	设置数据监视串口
  @参数	en		监视器使能（0/OFF:关闭 1/ON:开启）
  @参数	*p		串口号
  @返回 无
*/
void MS4220_UART::setSerialMonitor(bool en, HardwareSerial *p){
	serialMonitorMode = en;
	monitorSerial = p;
}

/*
  @说明	发送指令，可选是否等待应答
  @参数	str		要发送的字符串，不需要带地址，自动添加
  @参数	askEn	应答等待使能（0：不等待应答 1：等待应答）
  @返回 无
*/
void MS4220_UART::sendMsg(String str, bool askEn){
	if(address != -1) str = "@"+String(address)+str;//添加地址前缀
	while(pSerial->available()) pSerial->read();//清空缓存
	if(serialMonitorMode) monitorSerial->print("	Send: " + str);//串口监视器
	pSerial->print(str);//发送指令
	sendStr = str;
	if(askEn){
		waitAckFlag = 1;
		sendTime = millis();
		while(waitAckFlag) receive();//接收
	}//需要应答
}

/*
  @说明 接收指令，可选是否等待应答
  @参数	无
  @返回 bool	接收应答标志（0：应答完成 1：等待应答）
*/
bool MS4220_UART::receive(){
	String str = "\0";
	while(pSerial->available()){
		while(pSerial->available()){
			char c = pSerial->read();//读取
			str += c;
			if(c == '\n'){//数据有效性
				if(str.endsWith("ok\r\n"));
				else if(str.indexOf("State")!=-1 && findState(&str, ',', ','));
				else if(str.indexOf("<")!=-1 && dealstatus(&str));
				else receiveStr = str;
				if(serialMonitorMode)	monitorSerial->print("	Rece: " + str);//串口监视器
				str = "\0";
				waitAckFlag = 0;
			}
		}
		delay(10);//保证接收完整
	}
	if(receiveStr != "\0"){//有应答 但 应答内容无法识别
		if(serialMonitorMode)	monitorSerial->print("	Reply error, Rece: " + receiveStr);//串口监视器
		receiveStr == "\0";
	}
	if(waitAckFlag && millis()-sendTime>ackMaxTime){//无应答 或 应答超时
		status.state = -1;
		if(serialMonitorMode)	monitorSerial->print("	Reply timeout, Rece: " + receiveStr);//串口监视器
		(*func)(sendStr, address);
		waitAckFlag = 0;
	}
	return waitAckFlag;	
}

/*
  @说明 读取错误字符串
  @参数	无
  @返回 String
*/
String MS4220_UART::readErrorStr(){
	return receiveStr;
}

/*
  @说明 获取基本信息
  @参数	无
  @返回 String
*/
String MS4220_UART::getVersions(){
	sendMsg("$I\r\n",1);
	while(receive());
	return "";
}

/*
  @说明 读取运动状态
  @参数	无
  @返回 int
*/
int MS4220_UART::getState(){
	getStatus();
	return status.state;
}

/*
  @说明 读取运动状态 字符串类型
  @参数	无
  @返回 String
*/
String MS4220_UART::getStateToStr(){
	int num = getState();
	if(num==-1) return "Error";
	return stateToStr(num);
}

/*
  @说明 读取所有状态
  @参数	无
  @返回 STATUS_MS4220
*/
STATUS_MS4220 MS4220_UART::getStatus(){
	sendMsg("?\r\n",1);
	while(receive());
	return status;
}

/*
  @说明 等待空闲状态
  @参数	无
  @返回 无
*/
void MS4220_UART::waitIdle(){
	while(getState() != Idle);//等待空闲
}

/*
  @说明 归零
  @参数	无
  @返回 无
*/
void MS4220_UART::homing(){
  sendMsg("$H\r\n",1);//$H
	while(receive());
}

/*
  @说明 移动到零点位置
  @参数	无
  @返回 无
*/
void MS4220_UART::zero(){
  sendMsg("G1 E0\r\n",1);//$H
	while(receive());
}

/*
  @说明 速度模式，设置速度
  @参数	feed	运动速度
  @返回 无
*/
void MS4220_UART::setMoveSpeed(int feed){
	String str = "\0";
	str += "G6 F";
	str += String(feed);
	str += "\r\n";
  sendMsg(str,1);//$H
	while(receive());
}

/*
  @说明 位置模式，设置位置、速度
  @参数	pos		运动位置
  @参数	f			运动速度
  @返回 无
*/
void MS4220_UART::setMovePos(int32_t pos, uint16_t f){
	sendMsg("G1 E"+String(pos)+"F"+String(f)+"\r\n",1);
	while(receive());
}

/*
  @说明 设置当前的位置
  @参数	pos		位置坐标
  @返回 无
*/
void MS4220_UART::setPos(int32_t pos){
	sendMsg("G92 E"+String(pos)+"\r\n",1);
	while(receive());
}


/*
  @说明 超时提醒函数
  @参数	str		未应答的指令
  @参数	addr	未应答的设备地址
  @返回 无
*/
void MS4220_UART::infoTimeout(String str, int addr){
	
}

/*
  @说明 查找字符串中的数据
  @参数	str			状态所在的字符串
	@参数	fStr		要查找的字符串
	@参数	num			寻找字符串后的第几个数据
	@参数	retStr	读取到的数据
  @返回 bool 		读取成功标志（0：失败 1：成功）
*/
bool MS4220_UART::findNum(String* str, String fStr, uint8_t num, String* retStr){
	uint8_t startAddr,endAddr;
	startAddr = (*str).indexOf(fStr);
	if(startAddr == -1) return 0;
	endAddr = (*str).indexOf(':', startAddr);
	if(endAddr == -1) return 0;
	for(uint8_t i=0; i<num; i++){
		startAddr = endAddr+1;
		endAddr = (*str).indexOf(',', startAddr);
		if(endAddr == -1) return 0;
	}
	*retStr = (*str).substring(startAddr, endAddr);
	return 1;
}

/*
  @说明 查找字符串中的运动状态
  @参数	str		状态所在的字符串
	@参数	c1		开始字符
	@参数	c2		结束字符
  @返回 bool 	读取成功标志（0：失败 1：成功）
*/
bool MS4220_UART::findState(String* str, char c1, char c2){
	uint8_t startAddr,endAddr;
	startAddr = (*str).indexOf(c1);
	if(startAddr == -1) return 0;
	startAddr++;
	endAddr = (*str).indexOf(c2, startAddr);
	if(endAddr == -1) return 0;
	String s = (*str).substring(startAddr, endAddr);
	for(uint8_t i=0; i<7; i++){
		if(s == stateToStr(i)){
			status.state = i;
			return 1;
		}
	}
	status.state = -1;
	return 0;
}

/*
  @说明 解析返回状态
  @参数	str		状态字符串
  @返回 bool 	读取成功标志（0：失败 1：成功）
*/
bool MS4220_UART::dealstatus(String* str){
	String s;
	//获取状态
	if(findState(str, '<', ',')==0) return 0;
	//获取位置
	if(findNum(str, "P", 1, &s)==0) return 0;
	status.pos = s.toInt();
	//获取速度
	if(findNum(str, "F", 1, &s)==0) return 0;
	status.feed = s.toInt();
	return 1;
}
