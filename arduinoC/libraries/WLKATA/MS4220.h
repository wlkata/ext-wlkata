#ifndef _MS4220_H
#define _MS4220_H

#include <Arduino.h>
#include "base.h"

#define OUTTIME 3000

struct STATUS_MS4220{
	int state=-1;//运动状态
	int32_t pos;//位置
	int feed;//速度
};

class MS4220_UART{
  public:
    MS4220_UART();
    void init(HardwareSerial *pSerial, int port = -1);//设置设备的通讯串口、地址
		void setCallbackFunction(void (*_func)(String, int), uint32_t time=OUTTIME);//设置应答超时时间，回调函数
		void setSerialMonitor(bool en, HardwareSerial *p=&Serial);//设置串口监视开关
		void sendMsg(String str, bool askEn=1);//发送指令
		bool receive();//接收指令
		String readErrorStr();//读取错误字符串
		String getVersions();//获取基本信息
		int getState();//读取运动状态
		String getStateToStr();//读取运动状态 字符串类型
		STATUS_MS4220 getStatus();//读取所有状态
		void waitIdle();//等待空闲状态
		
		void homing();//归零
    void zero();//移动到零点位置
    void setMoveSpeed(int feed);//设置运动速度
		void setMovePos(int32_t pos, uint16_t f);//设置运动位置、速度
		void setPos(int32_t pos);//设置当前位置
		
  protected:
		STATUS_MS4220 status;//所有状态信息
		HardwareSerial *pSerial;//串口指针
		HardwareSerial *monitorSerial;//监视器串口指针
		bool serialMonitorMode = 0;//监视器模式 （0/OFF:关闭 1/ON:开启）
		int address;//设备地址
		uint32_t ackMaxTime=OUTTIME;//最大应答时间 ms
		void (*func)(String, int);//应答超时的回调函数
		bool waitAckFlag = 0;//等待应答标志位
		uint32_t sendTime;//数据发送时间
		String sendStr;//发送字符串
		String receiveStr;//接收字符串
		
		void infoTimeout(String str, int addr);//超时提醒函数
		bool findNum(String* str, String fStr, uint8_t num, String* retStr);//查找特定字符串
		bool findState(String* str, char c1, char c2);//查找状态字符串
		bool dealstatus(String* str);//解析返回状态
		
};

#endif
