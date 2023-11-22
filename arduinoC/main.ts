enum INIT {
  //% block="1"
  1,
  //% block="2"
  2,
  //% block="3"
  3,

}

enum LINE {
  //% block="1"
  1,
  //% block="2"
  2,
  //% block="3"
  3,
  //% block="4"
  4,
  //% block="5"
  5,
  //% block="6"
  6,
  //% block="7"
  7,
  //% block="8"
  8,
  //% block="9"
  9,
  //% block="10"
  10,
}
enum LINE1 {
  //% block="4800"
  4800,
  //% block="9600"
  9600,
  //% block="38400"
  38400,
  //% block="57600"
  57600,
  //% block="115200"
  115200,
}
enum ON_OFF {
  //% block="0"
  0,
  //% block="1"
  1,
}

enum ON_OFF1 {
  //% block="false"
  false,
  //% block="true"
  true,
}

enum ON_OFF3 {
  //% block="0"
  0,
  //% block="1"
  1,
  //% block="2"
  2,
}

enum HOMING {
  //% block="1-6"
  8,
  //% block="1-7"
  0,
  //% block="1"
  1,
  //% block="2"
  2,
  //% block="3"
  3,
  //% block="4"
  4,
  //% block="5"
  5,
  //% block="6"
  6,
  //% block="7"
  7,
}

enum HOMING1 {
  //% block="1-4"
  8,
  //% block="1-5"
  0,
  //% block="1"
  1,
  //% block="2"
  2,
  //% block="3"
  3,
  //% block="4"
  4,
  //% block="5"
  7,
}
enum TRUE_FALSE {
  //% block="true"
  true,
  //% block="false"
  false,
}

enum POSE1 {
  //% block="MOVEP"
  MOVEP,
  //% block="MOVEL"
  MOVEL,
  //% block="JUMP"
  JUMP,
}

enum POSE2 {
  //% block="ABS"
  ABS,
  //% block="INC"
  INC,
}

enum ARC {
  //% block="CW"
  CW,
  //% block="CCW"
  CCW,
}

enum PAUSE {
  //% block="movePause"
  movePause,
  //% block="moveContinue"
  moveContinue,
  //% block="moveStop"
  moveStop,
}

enum TATE {
  //% block="1"
  1,
  //% block="2"
  2,
  //% block="3"
  3,
  //% block="4"
  4,
  //% block="5"
  5,
  //% block="6"
  6,
  //% block="7"
  7,
}

enum BUZZER {
  //% block="0"
  0,
  //% block="1"
  1,
  //% block="2"
  2,
}

enum RGB {
  //% block="WHITE"
  WHITE,
  //% block="RED"
  RED,
  //% block="GREEN"
  GREEN,
  //% block="YELLOW"
  YELLOW,
  //% block="VIOLET"
  VIOLET,
  //% block="BLACK"
  BLACK,
}

enum KEY {
  //% block="3"
  3,
  //% block="2"
  2,
}

enum KEY1 {
  //% block="0"
  0,
  //% block="1"
  1,
}

enum GY33UART {
  //% block="UART2"
  2,
  //% block="UART3"
  3,

}
enum GY33UART1 {
  //% block="0"
  0,
  //% block="1"
  1,
  //% block="2"
  2,
  //% block="3"
  3,
  //% block="4"
  4,
  //% block="5"
  5,
  //% block="6"
  6,
  //% block="7"
  7,
  //% block="8"
  8,
  //% block="9"
  9,
  //% block="10"
  10,

}

enum GY33UART2 {
  //% block="0"
  0,
  //% block="1"
  1,
  //% block="2"
  2,
  //% block="3"
  3,
  //% block="4"
  4,
  //% block="5"
  5,
  //% block="6"
  6,
  //% block="7"
  7,

}
enum DIRE {
  //% block="w"
  w,
  //% block="s"
  s,
  //% block="a"
  a,
  //% block="d"
  d,
  //% block="q"
  q,
  //% block="e"
  e,

}

enum DIRE1 {
  //% block="x"
  x,
  //% block="c"
  c,

}

enum DIRE2 {
  //% block="1"
  1,
  //% block="0"
  0,

}

//% color="#FFA500" iconWidth=50 iconHeight=40
namespace Mirobot {
  //机械臂Mirobot初始化
  //% block="add [INIT1] add [INIT2] add [INIT3]" blockType="command"
  //% INIT1.shadow="dropdown" INIT1.options="LINE" INIT1.defl="LINE.1"
  //% INIT2.shadow="range" INIT2.params.min="0" INIT2.params.max="255" INIT2.defl="1"
  //% INIT3.shadow="dropdown" INIT3.options="LINE1" INIT3.defl="LINE1.38400"
  export function Mirobot_init(parameter: any, block: any) {
    let init1 = parameter.INIT1.code;
    let init2 = parameter.INIT2.code;
    let init3 = parameter.INIT3.code;

    Generator.addInclude("WLKATA_mirobot", "#include <WLKATA.h>");
    Generator.addObject(`init${init1}`, `Mirobot_UART`, `mirobot${init1};`);
    Generator.addSetup(`init.begin${init3}`, `Serial1.begin(${init3});`);
    Generator.addSetup(
      `init.begin1${init1}`,
      `mirobot${init1}.init(${init2});`
    );
  }
  1
  //机械臂Mirobot初始化1
  //% block="add [INIT1] add [INIT2] add [INIT3]" blockType="command"
  //% INIT1.shadow="dropdown" INIT1.options="LINE" INIT1.defl="LINE.1"
  //% INIT2.shadow="dropdown" INIT2.options="INIT" INIT2.defl="INIT.1"
  //% INIT3.shadow="dropdown" INIT3.options="LINE1" INIT3.defl="LINE1.38400"
  export function Mirobot_init1(parameter: any, block: any) {
    let init1 = parameter.INIT1.code;
    let init2 = parameter.INIT2.code;
    let init3 = parameter.INIT3.code;

    Generator.addInclude("WLKATA_mirobot", "#include <WLKATA.h>");
    Generator.addObject(`init${init1}`, `Mirobot_UART`, `mirobot${init1}(&Serial${init2});`);
    Generator.addSetup(`init.begin${init3}`, `Serial1.begin(${init3});`);
    Generator.addSetup(
      `init.begin1${init1}`,
      `mirobot${init1}.init(-1);`
    );
  }

  //机械臂Mirobot空闲状态下执行下一条
  //% block="add [IDLE1]" blockType="command"
  //% IDLE1.shadow="dropdown" IDLE1.options="LINE" IDLE1.defl="LINE.1"
  export function Mirobot_idle(parameter: any, block: any) {
    let init1 = parameter.IDLE1.code;

    Generator.addCode(`mirobot${init1}.waitIdle();`);
  }

  //机械臂Mirobot穿透指令
  //% block="add [MSG1]add[MSG2]add[MSG3]" blockType="command"
  //% MSG1.shadow="dropdown" MSG1.options="LINE" MSG1.defl="LINE.1"
  //% MSG2.shadow="dropdown" MSG2.options="ON_OFF" MSG2.defl="ON_OFF.0"
  //% MSG3.shadow="string"  MSG3.defl="o100"

  export function Mirobot_sendMsg(parameter: any, block: any) {
    let msg1 = parameter.MSG1.code;
    let msg2 = parameter.MSG2.code;
    let msg3 = parameter.MSG3.code;

    Generator.addCode(`mirobot${msg1}.sendMsg(${msg3},${msg2});`);
  }

  //机械臂Mirobot归航
  //% block="add [HOMING1]add[HOMING2]" blockType="command"
  //% HOMING1.shadow="dropdown" HOMING1.options="LINE" HOMING1.defl="LINE.1"
  //% HOMING2.shadow="dropdownRound" HOMING2.options="HOMING" HOMING2.defl="HOMING.8"

  export function Mirobot_homing(parameter: any, block: any) {
    let homing1 = parameter.HOMING1.code;
    let homing2 = parameter.HOMING2.code;

    Generator.addCode(`mirobot${homing1}.homing(${homing2});`);
  }

  //机械臂Mirobot重启
  //% block="add [RESET1]" blockType="command"
  //% RESET1.shadow="dropdown" RESET1.options="LINE" RESET1.defl="LINE.1"

  export function Mirobot_reset(parameter: any, block: any) {
    let homing1 = parameter.RESET1.code;

    Generator.addCode(`mirobot${homing1}.reset();`);
  }

  //机械臂Mirobot回到零点
  //% block="add [ZERO1]" blockType="command"
  //% ZERO1.shadow="dropdown" ZERO1.options="LINE" ZERO1.defl="LINE.1"

  export function Mirobot_zero(parameter: any, block: any) {
    let homing1 = parameter.ZERO1.code;

    Generator.addCode(`mirobot${homing1}.zero();`);
  }

  //机械臂Mirobot离线文件执行
  //% block="add [RUNFILE1]add[RUNFILE2]add[RUNFILE3]" blockType="command"
  //% RUNFILE1.shadow="dropdown" RUNFILE1.options="LINE" RUNFILE1.defl="LINE.1"
  //% RUNFILE2.shadow="string"  RUNFILE2.defl="test"
  //% RUNFILE3.shadow="dropdown" RUNFILE3.options="TRUE_FALSE" RUNFILE3.defl="TRUE_FALSE.false"

  export function Mirobot_runFile(parameter: any, block: any) {
    let runFile1 = parameter.RUNFILE1.code;
    let runFile2 = parameter.RUNFILE2.code;
    let runFile3 = parameter.RUNFILE3.code;

    Generator.addCode(`mirobot${runFile1}.runFile(${runFile2},${runFile3});`);
  }

  //机械臂1-6轴笛卡尔控制
  //% block="add [MOVEPOSE1]add[MOVEPOSE2]add[MOVEPOSE3]add[MOVEPOSE4]add[MOVEPOSE5]add[MOVEPOSE6]add[MOVEPOSE7]add[MOVEPOSE8]add[MOVEPOSE9]" blockType="command"
  //% MOVEPOSE1.shadow="dropdown" MOVEPOSE1.options="LINE" MOVEPOSE1.defl="LINE.1"
  //% MOVEPOSE2.shadow="dropdown" MOVEPOSE2.options="POSE1" MOVEPOSE2.defl="POSE1.1"
  //% MOVEPOSE3.shadow="dropdown" MOVEPOSE3.options="POSE2" MOVEPOSE3.defl="POSE2.1"
  //% MOVEPOSE4.shadow="number"  MOVEPOSE4.defl="192"
  //% MOVEPOSE5.shadow="number"  MOVEPOSE5.defl="0"
  //% MOVEPOSE6.shadow="number"  MOVEPOSE6.defl="230"
  //% MOVEPOSE7.shadow="number"  MOVEPOSE7.defl="0"
  //% MOVEPOSE8.shadow="number"  MOVEPOSE8.defl="0"
  //% MOVEPOSE9.shadow="number"  MOVEPOSE9.defl="0"

  export function Mirobot_movePose(parameter: any, block: any) {
    let movePose1 = parameter.MOVEPOSE1.code;
    let movePose2 = parameter.MOVEPOSE2.code;
    let movePose3 = parameter.MOVEPOSE3.code;
    let movePose4 = parameter.MOVEPOSE4.code;
    let movePose5 = parameter.MOVEPOSE5.code;
    let movePose6 = parameter.MOVEPOSE6.code;
    let movePose7 = parameter.MOVEPOSE7.code;
    let movePose8 = parameter.MOVEPOSE8.code;
    let movePose9 = parameter.MOVEPOSE9.code;

    Generator.addCode(
      `mirobot${movePose1}.movePose(${movePose2},${movePose3},${movePose4},${movePose5},${movePose6},${movePose7},${movePose8},${movePose9});`
    );
  }

  //机械臂1-7轴笛卡尔控制
  //% block="add [MOVEPOSE11]add[MOVEPOSE12]add[MOVEPOSE13]add[MOVEPOSE14]add[MOVEPOSE15]add[MOVEPOSE16]add[MOVEPOSE17]add[MOVEPOSE18]add[MOVEPOSE19]add[MOVEPOSE20]" blockType="command"
  //% MOVEPOSE11.shadow="dropdown" MOVEPOSE11.options="LINE" MOVEPOSE11.defl="LINE.1"
  //% MOVEPOSE12.shadow="dropdown" MOVEPOSE12.options="POSE1" MOVEPOSE12.defl="POSE1.1"
  //% MOVEPOSE13.shadow="dropdown" MOVEPOSE13.options="POSE2" MOVEPOSE13.defl="POSE2.1"
  //% MOVEPOSE14.shadow="number"  MOVEPOSE14.defl="192"
  //% MOVEPOSE15.shadow="number"  MOVEPOSE15.defl="0"
  //% MOVEPOSE16.shadow="number"  MOVEPOSE16.defl="230"
  //% MOVEPOSE17.shadow="number"  MOVEPOSE17.defl="0"
  //% MOVEPOSE18.shadow="number"  MOVEPOSE18.defl="0"
  //% MOVEPOSE19.shadow="number"  MOVEPOSE19.defl="0"
  //% MOVEPOSE20.shadow="number"  MOVEPOSE20.defl="0"

  export function Mirobot_movePose1(parameter: any, block: any) {
    let movePose11 = parameter.MOVEPOSE11.code;
    let movePose12 = parameter.MOVEPOSE12.code;
    let movePose13 = parameter.MOVEPOSE13.code;
    let movePose14 = parameter.MOVEPOSE14.code;
    let movePose15 = parameter.MOVEPOSE15.code;
    let movePose16 = parameter.MOVEPOSE16.code;
    let movePose17 = parameter.MOVEPOSE17.code;
    let movePose18 = parameter.MOVEPOSE18.code;
    let movePose19 = parameter.MOVEPOSE19.code;
    let movePose20 = parameter.MOVEPOSE20.code;

    Generator.addCode(
      `mirobot${movePose11}.movePose(${movePose12},${movePose13},${movePose14},${movePose15},${movePose16},${movePose17},${movePose18},${movePose19},${movePose20});`
    );
  }

  //机械臂圆弧控制

  //% block="add [MOVEARC1]add[MOVEARC2]add[MOVEARC3]add[MOVEARC4]add[MOVEARC5]add[MOVEARC6]add[MOVEARC7]" blockType="command"
  //% MOVEARC1.shadow="dropdown" MOVEARC1.options="LINE" MOVEARC1.defl="LINE.1"
  //% MOVEARC2.shadow="dropdown" MOVEARC2.options="ARC" MOVEARC2.defl="ARC.CW"
  //% MOVEARC3.shadow="dropdown" MOVEARC3.options="POSE2" MOVEARC3.defl="POSE2.1"
  //% MOVEARC4.shadow="number"  MOVEARC4.defl="192"
  //% MOVEARC5.shadow="number"  MOVEARC5.defl="0"
  //% MOVEARC6.shadow="number"  MOVEARC6.defl="230"
  //% MOVEARC7.shadow="number"  MOVEARC7.defl="0"

  export function Mirobot_moveArc(parameter: any, block: any) {
    let movearc1 = parameter.MOVEARC1.code;
    let movearc2 = parameter.MOVEARC2.code;
    let movearc3 = parameter.MOVEARC3.code;
    let movearc4 = parameter.MOVEARC4.code;
    let movearc5 = parameter.MOVEARC5.code;
    let movearc6 = parameter.MOVEARC6.code;
    let movearc7 = parameter.MOVEARC7.code;

    Generator.addCode(
      `mirobot${movearc1}.moveArc(${movearc2},${movearc3},${movearc4},${movearc5},${movearc6},${movearc7});`
    );
  }

  //机械臂1-6轴角度控制
  //% block="add [MOVEJOINTS1]add[MOVEJOINTS2]add[MOVEJOINTS3]add[MOVEJOINTS4]add[MOVEJOINTS5]add[MOVEJOINTS6]add[MOVEJOINTS7]add[MOVEJOINTS8]" blockType="command"
  //% MOVEJOINTS1.shadow="dropdown" MOVEJOINTS1.options="LINE" MOVEJOINTS1.defl="LINE.1"
  //% MOVEJOINTS2.shadow="dropdown" MOVEJOINTS2.options="POSE2" MOVEJOINTS2.defl="POSE2.1"
  //% MOVEJOINTS3.shadow="number"  MOVEJOINTS3.defl="0"
  //% MOVEJOINTS4.shadow="number"  MOVEJOINTS4.defl="0"
  //% MOVEJOINTS5.shadow="number"  MOVEJOINTS5.defl="0"
  //% MOVEJOINTS6.shadow="number"  MOVEJOINTS6.defl="0"
  //% MOVEJOINTS7.shadow="number"  MOVEJOINTS7.defl="0"
  //% MOVEJOINTS8.shadow="number"  MOVEJOINTS8.defl="0"

  export function Mirobot_moveJoints(parameter: any, block: any) {
    let movejoints1 = parameter.MOVEJOINTS1.code;
    let movejoints2 = parameter.MOVEJOINTS2.code;
    let movejoints3 = parameter.MOVEJOINTS3.code;
    let movejoints4 = parameter.MOVEJOINTS4.code;
    let movejoints5 = parameter.MOVEJOINTS5.code;
    let movejoints6 = parameter.MOVEJOINTS6.code;
    let movejoints7 = parameter.MOVEJOINTS7.code;
    let movejoints8 = parameter.MOVEJOINTS8.code;

    Generator.addCode(
      `mirobot${movejoints1}.moveJoints(${movejoints2},${movejoints3},${movejoints4},${movejoints5},${movejoints6},${movejoints7},${movejoints8});`
    );
  }

  //机械臂速度控制
  //% block="add [SpeedRatio1] add[SpeedRatio2]" blockType="command"
  //% SpeedRatio1.shadow="dropdown" SpeedRatio1.options="LINE" SpeedRatio1.defl="LINE.1"
  //% SpeedRatio2.shadow="range"  SpeedRatio2.params.min=0    SpeedRatio2.params.max=100    SpeedRatio2.defl=50


  export function Mirobot_motionSpeedRatio(parameter: any, block: any) {
    let SpeedRatio1 = parameter.SpeedRatio1.code;
    let SpeedRatio2 = parameter.SpeedRatio2.code;

    Generator.addCode(
      `mirobot${SpeedRatio1}.motionSpeedRatio(${SpeedRatio2});`
    );
  }

  //机械臂暂停控制
  //% block="add [movePause1] add[movePause2]" blockType="command"
  //% movePause1.shadow="dropdown" movePause1.options="LINE" movePause1.defl="LINE.1"
  //% movePause2.shadow="dropdown" movePause2.options="PAUSE" movePause2.defl="PAUSE.movePause"

  export function Mirobot_movePause(parameter: any, block: any) {
    let movePause1 = parameter.movePause1.code;
    let movePause2 = parameter.movePause2.code;

    Generator.addCode(`mirobot${movePause1}.${movePause2}();`);
  }

  //机械臂第7轴减速比
  //% block="add [setExjRatio1] add[setExjRatio2]" blockType="command"
  //% setExjRatio1.shadow="dropdown" setExjRatio1.options="LINE" setExjRatio1.defl="LINE.1"
  //% setExjRatio2.shadow="number" setExjRatio2.defl="1"

  export function Mirobot_setExjRatio(parameter: any, block: any) {
    let setExjRatio1 = parameter.setExjRatio1.code;
    let setExjRatio2 = parameter.setExjRatio2.code;

    Generator.addCode(`mirobot${setExjRatio1}.setExjRatio(${setExjRatio2});`);
  }

  //机械臂第7轴移动距离
  //% block="add [moveExjDist1] add[moveExjDist2] add[moveExjDist3]" blockType="command"
  //% moveExjDist1.shadow="dropdown" moveExjDist1.options="LINE" moveExjDist1.defl="LINE.1"
  //% moveExjDist2.shadow="dropdown" moveExjDist2.options="POSE2" moveExjDist2.defl="POSE2.1"
  //% moveExjDist3.shadow="number" moveExjDist3.defl="50"

  export function Mirobot_moveExjDist(parameter: any, block: any) {
    let moveExjDist1 = parameter.moveExjDist1.code;
    let moveExjDist2 = parameter.moveExjDist2.code;
    let moveExjDist3 = parameter.moveExjDist3.code;

    Generator.addCode(
      `mirobot${moveExjDist1}.moveExjDist(${moveExjDist2},${moveExjDist3});`
    );
  }

  //机械臂第7轴移动脉冲
  //% block="add [moveExjPulse1] add[moveExjPulse2] add[moveExjPulse3]" blockType="command"
  //% moveExjPulse1.shadow="dropdown" moveExjPulse1.options="LINE" moveExjPulse1.defl="LINE.1"
  //% moveExjPulse2.shadow="dropdown" moveExjPulse2.options="POSE2" moveExjPulse2.defl="POSE2.1"
  //% moveExjPulse3.shadow="number" moveExjPulse3.defl="1000"

  export function Mirobot_moveExjPulse(parameter: any, block: any) {
    let moveExjPulse1 = parameter.moveExjPulse1.code;
    let moveExjPulse2 = parameter.moveExjPulse2.code;
    let moveExjPulse3 = parameter.moveExjPulse3.code;

    Generator.addCode(
      `mirobot${moveExjPulse1}.moveExjDist(${moveExjPulse2},${moveExjPulse3});`
    );
  }

  //机械臂电动夹爪控制
  //% block="add [setEndtGripper1] add[setEndtGripper2] " blockType="command"
  //% setEndtGripper1.shadow="dropdown" setEndtGripper1.options="LINE" setEndtGripper1.defl="LINE.1"
  //% setEndtGripper2.shadow="dropdown" setEndtGripper2.options="ON_OFF1" setEndtGripper2.defl="ON_OFF1.true"

  export function Mirobot_setEndtGripper(parameter: any, block: any) {
    let setEndtGripper1 = parameter.setEndtGripper1.code;
    let setEndtGripper2 = parameter.setEndtGripper2.code;

    Generator.addCode(
      `mirobot${setEndtGripper1}.setEndtGripper(${setEndtGripper2});`
    );
  }

  //机械臂吸盘控制
  //% block="add [setEndtPump1] add[setEndtPump2] " blockType="command"
  //% setEndtPump1.shadow="dropdown" setEndtPump1.options="LINE" setEndtPump1.defl="LINE.1"
  //% setEndtPump2.shadow="dropdown" setEndtPump2.options="ON_OFF" setEndtPump2.defl="ON_OFF.0"

  export function Mirobot_setEndtPump(parameter: any, block: any) {
    let setEndtPump1 = parameter.setEndtPump1.code;
    let setEndtPump2 = parameter.setEndtPump2.code;

    Generator.addCode(`mirobot${setEndtPump1}.setEndtPump(${setEndtPump2});`);
  }

  //机械臂三指柔爪控制
  //% block="add [setEndtPump11] add[setEndtPump12] " blockType="command"
  //% setEndtPump11.shadow="dropdown" setEndtPump11.options="LINE" setEndtPump11.defl="LINE.1"
  //% setEndtPump12.shadow="dropdown" setEndtPump12.options="ON_OFF3" setEndtPump12.defl="ON_OFF3.0"

  export function Mirobot_setEndtPump1(parameter: any, block: any) {
    let setEndtPump11 = parameter.setEndtPump11.code;
    let setEndtPump12 = parameter.setEndtPump12.code;

    Generator.addCode(`mirobot${setEndtPump11}.setEndtPump(${setEndtPump12});`);
  }

  //机械臂PWM控制
  //% block="add [setEndtPwm1] add[setEndtPwm2] " blockType="command"
  //% setEndtPwm1.shadow="dropdown" setEndtPwm1.options="LINE" setEndtPwm1.defl="LINE.1"

  //% setEndtPwm2.shadow="range"  setEndtPwm2.params.min=0    setEndtPwm2.params.max=1000    setEndtPwm2.defl=500

  export function Mirobot_setEndtPwm(parameter: any, block: any) {
    let setEndtPwm1 = parameter.setEndtPwm1.code;
    let setEndtPwm2 = parameter.setEndtPwm2.code;

    Generator.addCode(`mirobot${setEndtPwm1}.setEndtPwm(${setEndtPwm2});`);
  }

  //机械臂状态
  //% block="add [getState1] " blockType="reporter"
  //% getState1.shadow="dropdown" getState1.options="LINE" getState1.defl="LINE.1"

  export function Mirobot_getState(parameter: any, block: any) {
    let getState1 = parameter.getState1.code;

    Generator.addCode(`mirobot${getState1}.getState()`);
  }

  //机械臂状态1
  //% block="add [getState11] add[getState12]" blockType="boolean"
  //% getState11.shadow="dropdown" getState11.options="LINE" getState11.defl="LINE.1"
  //% getState12.shadow="dropdown" getState12.options="TATE" getState12.defl="TATE.1"
  export function Mirobot_getState1(parameter: any, block: any) {
    let getState11 = parameter.getState11.code;
    let getState12 = parameter.getState12.code;

    Generator.addCode(`mirobot${getState11}.getState()==${getState12}`);
  }

  //机械臂版本号
  //% block="add [getVersions1] " blockType="reporter"
  //% getVersions1.shadow="dropdown" getVersions1.options="LINE" getVersions1.defl="LINE.1"

  export function Mirobot_getVersions(parameter: any, block: any) {
    let getVersions1 = parameter.getVersions1.code;

    Generator.addCode(`mirobot${getVersions1}.getVersions()`);
  }

  //% block="---"
  export function noteSep() { }

  //机械臂E4初始化
  //% block="add [INIT1] add [INIT2] add [INIT3]" blockType="command"
  //% INIT1.shadow="dropdown" INIT1.options="LINE" INIT1.defl="LINE.1"
  //% INIT2.shadow="range" INIT2.params.min="0" INIT2.params.max="255" INIT2.defl="1"
  //% INIT3.shadow="dropdown" INIT3.options="LINE1" INIT3.defl="LINE1.38400"
  export function E4_init(parameter: any, block: any) {
    let init1 = parameter.INIT1.code;
    let init2 = parameter.INIT2.code;
    let init3 = parameter.INIT3.code;

    Generator.addInclude("WLKATA_E4", "#include <WLKATA.h>");
    Generator.addObject(`init${init1}`, `E4_UART`, `E4${init1};`);
    Generator.addSetup(`init.begin${init3}`, `Serial1.begin(${init3});`);
    Generator.addSetup(
      `init.begin1${init1}`,
      `E4${init1}.init(${init2});`
    );
  }
  1
  //机械臂E4初始化1
  //% block="add [INIT1] add [INIT2] add [INIT3]" blockType="command"
  //% INIT1.shadow="dropdown" INIT1.options="LINE" INIT1.defl="LINE.1"
  //% INIT2.shadow="dropdown" INIT2.options="INIT" INIT2.defl="INIT.1"
  //% INIT3.shadow="dropdown" INIT3.options="LINE1" INIT3.defl="LINE1.38400"
  export function E4_init1(parameter: any, block: any) {
    let init1 = parameter.INIT1.code;
    let init2 = parameter.INIT2.code;
    let init3 = parameter.INIT3.code;

    Generator.addInclude("WLKATA_E4", "#include <WLKATA.h>");
    Generator.addObject(`init${init1}`, `E4_UART`, `E4${init1}(&Serial${init2});`);
    Generator.addSetup(`init.begin${init3}`, `Serial1.begin(${init3});`);
    Generator.addSetup(
      `init.begin1${init1}`,
      `E4${init1}.init(-1);`
    );
  }

  //机械臂E4空闲状态下执行下一条
  //% block="add [IDLE1]" blockType="command"
  //% IDLE1.shadow="dropdown" IDLE1.options="LINE" IDLE1.defl="LINE.1"
  export function E4_idle(parameter: any, block: any) {
    let init1 = parameter.IDLE1.code;

    Generator.addCode(`E4${init1}.waitIdle();`);
  }

  //机械臂E4穿透指令
  //% block="add [MSG1]add[MSG2]add[MSG3]" blockType="command"
  //% MSG1.shadow="dropdown" MSG1.options="LINE" MSG1.defl="LINE.1"
  //% MSG2.shadow="dropdown" MSG2.options="ON_OFF" MSG2.defl="ON_OFF.0"
  //% MSG3.shadow="string"  MSG3.defl="o100"

  export function E4_sendMsg(parameter: any, block: any) {
    let msg1 = parameter.MSG1.code;
    let msg2 = parameter.MSG2.code;
    let msg3 = parameter.MSG3.code;

    Generator.addCode(`E4${msg1}.sendMsg(${msg3},${msg2});`);
  }

  //机械臂E4归航
  //% block="add [HOMING1]add[HOMING2]" blockType="command"
  //% HOMING1.shadow="dropdown" HOMING1.options="LINE" HOMING1.defl="LINE.1"
  //% HOMING2.shadow="dropdownRound" HOMING2.options="HOMING1" HOMING2.defl="HOMING.8"

  export function E4_homing(parameter: any, block: any) {
    let homing1 = parameter.HOMING1.code;
    let homing2 = parameter.HOMING2.code;

    Generator.addCode(`E4${homing1}.homing(${homing2});`);
  }

  //机械臂E4重启
  //% block="add [RESET1]" blockType="command"
  //% RESET1.shadow="dropdown" RESET1.options="LINE" RESET1.defl="LINE.1"

  export function E4_reset(parameter: any, block: any) {
    let homing1 = parameter.RESET1.code;

    Generator.addCode(`E4${homing1}.reset();`);
  }

  //机械臂E4回到零点
  //% block="add [ZERO1]" blockType="command"
  //% ZERO1.shadow="dropdown" ZERO1.options="LINE" ZERO1.defl="LINE.1"

  export function E4_zero(parameter: any, block: any) {
    let homing1 = parameter.ZERO1.code;

    Generator.addCode(`E4${homing1}.zero();`);
  }

  //机械臂E4离线文件执行
  //% block="add [RUNFILE1]add[RUNFILE2]add[RUNFILE3]" blockType="command"
  //% RUNFILE1.shadow="dropdown" RUNFILE1.options="LINE" RUNFILE1.defl="LINE.1"
  //% RUNFILE2.shadow="string"  RUNFILE2.defl="test"
  //% RUNFILE3.shadow="dropdown" RUNFILE3.options="TRUE_FALSE" RUNFILE3.defl="TRUE_FALSE.false"

  export function E4_runFile(parameter: any, block: any) {
    let runFile1 = parameter.RUNFILE1.code;
    let runFile2 = parameter.RUNFILE2.code;
    let runFile3 = parameter.RUNFILE3.code;

    Generator.addCode(`E4${runFile1}.runFile(${runFile2},${runFile3});`);
  }

  //机械臂E41-4轴笛卡尔控制
  //% block="add [MOVEPOSE1]add[MOVEPOSE2]add[MOVEPOSE3]add[MOVEPOSE4]add[MOVEPOSE5]add[MOVEPOSE6]add[MOVEPOSE7]" blockType="command"
  //% MOVEPOSE1.shadow="dropdown" MOVEPOSE1.options="LINE" MOVEPOSE1.defl="LINE.1"
  //% MOVEPOSE2.shadow="dropdown" MOVEPOSE2.options="POSE1" MOVEPOSE2.defl="POSE1.1"
  //% MOVEPOSE3.shadow="dropdown" MOVEPOSE3.options="POSE2" MOVEPOSE3.defl="POSE2.1"
  //% MOVEPOSE4.shadow="number"  MOVEPOSE4.defl="195"
  //% MOVEPOSE5.shadow="number"  MOVEPOSE5.defl="0"
  //% MOVEPOSE6.shadow="number"  MOVEPOSE6.defl="269"
  //% MOVEPOSE7.shadow="number"  MOVEPOSE7.defl="0"


  export function E4_movePose(parameter: any, block: any) {
    let movePose1 = parameter.MOVEPOSE1.code;
    let movePose2 = parameter.MOVEPOSE2.code;
    let movePose3 = parameter.MOVEPOSE3.code;
    let movePose4 = parameter.MOVEPOSE4.code;
    let movePose5 = parameter.MOVEPOSE5.code;
    let movePose6 = parameter.MOVEPOSE6.code;
    let movePose7 = parameter.MOVEPOSE7.code;


    Generator.addCode(
      `E4${movePose1}.movePose(${movePose2},${movePose3},${movePose4},${movePose5},${movePose6},${movePose7});`
    );
  }

  //机械臂E41-5轴笛卡尔控制
  //% block="add [MOVEPOSE11]add[MOVEPOSE12]add[MOVEPOSE13]add[MOVEPOSE14]add[MOVEPOSE15]add[MOVEPOSE16]add[MOVEPOSE17]add[MOVEPOSE20]" blockType="command"
  //% MOVEPOSE11.shadow="dropdown" MOVEPOSE11.options="LINE" MOVEPOSE11.defl="LINE.1"
  //% MOVEPOSE12.shadow="dropdown" MOVEPOSE12.options="POSE1" MOVEPOSE12.defl="POSE1.1"
  //% MOVEPOSE13.shadow="dropdown" MOVEPOSE13.options="POSE2" MOVEPOSE13.defl="POSE2.1"
  //% MOVEPOSE14.shadow="number"  MOVEPOSE14.defl="195"
  //% MOVEPOSE15.shadow="number"  MOVEPOSE15.defl="0"
  //% MOVEPOSE16.shadow="number"  MOVEPOSE16.defl="269"
  //% MOVEPOSE17.shadow="number"  MOVEPOSE17.defl="0"
  //% MOVEPOSE20.shadow="number"  MOVEPOSE20.defl="0"

  export function E4_movePose1(parameter: any, block: any) {
    let movePose11 = parameter.MOVEPOSE11.code;
    let movePose12 = parameter.MOVEPOSE12.code;
    let movePose13 = parameter.MOVEPOSE13.code;
    let movePose14 = parameter.MOVEPOSE14.code;
    let movePose15 = parameter.MOVEPOSE15.code;
    let movePose16 = parameter.MOVEPOSE16.code;
    let movePose17 = parameter.MOVEPOSE17.code;
    let movePose20 = parameter.MOVEPOSE20.code;

    Generator.addCode(
      `E4${movePose11}.movePose(${movePose12},${movePose13},${movePose14},${movePose15},${movePose16},${movePose17},${movePose20});`
    );
  }

  //机械臂E4圆弧控制

  //% block="add [MOVEARC1]add[MOVEARC2]add[MOVEARC3]add[MOVEARC4]add[MOVEARC5]add[MOVEARC6]add[MOVEARC7]" blockType="command"
  //% MOVEARC1.shadow="dropdown" MOVEARC1.options="LINE" MOVEARC1.defl="LINE.1"
  //% MOVEARC2.shadow="dropdown" MOVEARC2.options="ARC" MOVEARC2.defl="ARC.CW"
  //% MOVEARC3.shadow="dropdown" MOVEARC3.options="POSE2" MOVEARC3.defl="POSE2.1"
  //% MOVEARC4.shadow="number"  MOVEARC4.defl="195"
  //% MOVEARC5.shadow="number"  MOVEARC5.defl="0"
  //% MOVEARC6.shadow="number"  MOVEARC6.defl="269"
  //% MOVEARC7.shadow="number"  MOVEARC7.defl="60"

  export function E4_moveArc(parameter: any, block: any) {
    let movearc1 = parameter.MOVEARC1.code;
    let movearc2 = parameter.MOVEARC2.code;
    let movearc3 = parameter.MOVEARC3.code;
    let movearc4 = parameter.MOVEARC4.code;
    let movearc5 = parameter.MOVEARC5.code;
    let movearc6 = parameter.MOVEARC6.code;
    let movearc7 = parameter.MOVEARC7.code;

    Generator.addCode(
      `E4${movearc1}.moveArc(${movearc2},${movearc3},${movearc4},${movearc5},${movearc6},${movearc7});`
    );
  }

  //机械臂E4 1-4轴角度控制
  //% block="add [MOVEJOINTS1]add[MOVEJOINTS2]add[MOVEJOINTS3]add[MOVEJOINTS4]add[MOVEJOINTS5]add[MOVEJOINTS6]" blockType="command"
  //% MOVEJOINTS1.shadow="dropdown" MOVEJOINTS1.options="LINE" MOVEJOINTS1.defl="LINE.1"
  //% MOVEJOINTS2.shadow="dropdown" MOVEJOINTS2.options="POSE2" MOVEJOINTS2.defl="POSE2.1"
  //% MOVEJOINTS3.shadow="number"  MOVEJOINTS3.defl="0"
  //% MOVEJOINTS4.shadow="number"  MOVEJOINTS4.defl="0"
  //% MOVEJOINTS5.shadow="number"  MOVEJOINTS5.defl="0"
  //% MOVEJOINTS6.shadow="number"  MOVEJOINTS6.defl="0"

  export function E4_moveJoints(parameter: any, block: any) {
    let movejoints1 = parameter.MOVEJOINTS1.code;
    let movejoints2 = parameter.MOVEJOINTS2.code;
    let movejoints3 = parameter.MOVEJOINTS3.code;
    let movejoints4 = parameter.MOVEJOINTS4.code;
    let movejoints5 = parameter.MOVEJOINTS5.code;
    let movejoints6 = parameter.MOVEJOINTS6.code;

    Generator.addCode(
      `E4${movejoints1}.moveJoints(${movejoints2},${movejoints3},${movejoints4},${movejoints5},${movejoints6});`
    );
  }

  //机械臂E4速度控制
  //% block="add [SpeedRatio1] add[SpeedRatio2]" blockType="command"
  //% SpeedRatio1.shadow="dropdown" SpeedRatio1.options="LINE" SpeedRatio1.defl="LINE.1"
  //% SpeedRatio2.shadow="range"  SpeedRatio2.params.min=0    SpeedRatio2.params.max=100    SpeedRatio2.defl=50


  export function E4_motionSpeedRatio(parameter: any, block: any) {
    let SpeedRatio1 = parameter.SpeedRatio1.code;
    let SpeedRatio2 = parameter.SpeedRatio2.code;

    Generator.addCode(
      `E4${SpeedRatio1}.motionSpeedRatio(${SpeedRatio2});`
    );
  }

  //机械臂E4暂停控制
  //% block="add [movePause1] add[movePause2]" blockType="command"
  //% movePause1.shadow="dropdown" movePause1.options="LINE" movePause1.defl="LINE.1"
  //% movePause2.shadow="dropdown" movePause2.options="PAUSE" movePause2.defl="PAUSE.movePause"

  export function E4_movePause(parameter: any, block: any) {
    let movePause1 = parameter.movePause1.code;
    let movePause2 = parameter.movePause2.code;

    Generator.addCode(`E4${movePause1}.${movePause2}();`);
  }

  //机械臂E4第7轴减速比
  //% block="add [setExjRatio1] add[setExjRatio2]" blockType="command"
  //% setExjRatio1.shadow="dropdown" setExjRatio1.options="LINE" setExjRatio1.defl="LINE.1"
  //% setExjRatio2.shadow="number" setExjRatio2.defl="1"

  export function E4_setExjRatio(parameter: any, block: any) {
    let setExjRatio1 = parameter.setExjRatio1.code;
    let setExjRatio2 = parameter.setExjRatio2.code;

    Generator.addCode(`E4${setExjRatio1}.setExjRatio(${setExjRatio2});`);
  }

  //机械臂E4第7轴移动距离
  //% block="add [moveExjDist1] add[moveExjDist2] add[moveExjDist3]" blockType="command"
  //% moveExjDist1.shadow="dropdown" moveExjDist1.options="LINE" moveExjDist1.defl="LINE.1"
  //% moveExjDist2.shadow="dropdown" moveExjDist2.options="POSE2" moveExjDist2.defl="POSE2.1"
  //% moveExjDist3.shadow="number" moveExjDist3.defl="50"

  export function E4_moveExjDist(parameter: any, block: any) {
    let moveExjDist1 = parameter.moveExjDist1.code;
    let moveExjDist2 = parameter.moveExjDist2.code;
    let moveExjDist3 = parameter.moveExjDist3.code;

    Generator.addCode(
      `E4${moveExjDist1}.moveExjDist(${moveExjDist2},${moveExjDist3});`
    );
  }

  //机械臂E4第7轴移动脉冲
  //% block="add [moveExjPulse1] add[moveExjPulse2] add[moveExjPulse3]" blockType="command"
  //% moveExjPulse1.shadow="dropdown" moveExjPulse1.options="LINE" moveExjPulse1.defl="LINE.1"
  //% moveExjPulse2.shadow="dropdown" moveExjPulse2.options="POSE2" moveExjPulse2.defl="POSE2.1"
  //% moveExjPulse3.shadow="number" moveExjPulse3.defl="1000"

  export function E4_moveExjPulse(parameter: any, block: any) {
    let moveExjPulse1 = parameter.moveExjPulse1.code;
    let moveExjPulse2 = parameter.moveExjPulse2.code;
    let moveExjPulse3 = parameter.moveExjPulse3.code;

    Generator.addCode(
      `E4${moveExjPulse1}.moveExjDist(${moveExjPulse2},${moveExjPulse3});`
    );
  }

  //机械臂E4电动夹爪控制
  //% block="add [setEndtGripper1] add[setEndtGripper2] " blockType="command"
  //% setEndtGripper1.shadow="dropdown" setEndtGripper1.options="LINE" setEndtGripper1.defl="LINE.1"
  //% setEndtGripper2.shadow="dropdown" setEndtGripper2.options="ON_OFF1" setEndtGripper2.defl="ON_OFF1.true"

  export function E4_setEndtGripper(parameter: any, block: any) {
    let setEndtGripper1 = parameter.setEndtGripper1.code;
    let setEndtGripper2 = parameter.setEndtGripper2.code;

    Generator.addCode(
      `E4${setEndtGripper1}.setEndtGripper(${setEndtGripper2});`
    );
  }

  //机械臂E4吸盘控制
  //% block="add [setEndtPump1] add[setEndtPump2] " blockType="command"
  //% setEndtPump1.shadow="dropdown" setEndtPump1.options="LINE" setEndtPump1.defl="LINE.1"
  //% setEndtPump2.shadow="dropdown" setEndtPump2.options="ON_OFF" setEndtPump2.defl="ON_OFF.0"

  export function E4_setEndtPump(parameter: any, block: any) {
    let setEndtPump1 = parameter.setEndtPump1.code;
    let setEndtPump2 = parameter.setEndtPump2.code;

    Generator.addCode(`E4${setEndtPump1}.setEndtPump(${setEndtPump2});`);
  }

  //机械臂E4三指柔爪控制
  //% block="add [setEndtPump11] add[setEndtPump12] " blockType="command"
  //% setEndtPump11.shadow="dropdown" setEndtPump11.options="LINE" setEndtPump11.defl="LINE.1"
  //% setEndtPump12.shadow="dropdown" setEndtPump12.options="ON_OFF3" setEndtPump12.defl="ON_OFF3.0"

  export function E4_setEndtPump1(parameter: any, block: any) {
    let setEndtPump11 = parameter.setEndtPump11.code;
    let setEndtPump12 = parameter.setEndtPump12.code;

    Generator.addCode(`E4${setEndtPump11}.setEndtPump(${setEndtPump12});`);
  }

  //机械臂E4PWM控制
  //% block="add [setEndtPwm1] add[setEndtPwm2] " blockType="command"
  //% setEndtPwm1.shadow="dropdown" setEndtPwm1.options="LINE" setEndtPwm1.defl="LINE.1"

  //% setEndtPwm2.shadow="range"  setEndtPwm2.params.min=0    setEndtPwm2.params.max=1000    setEndtPwm2.defl=500

  export function E4_setEndtPwm(parameter: any, block: any) {
    let setEndtPwm1 = parameter.setEndtPwm1.code;
    let setEndtPwm2 = parameter.setEndtPwm2.code;

    Generator.addCode(`E4${setEndtPwm1}.setEndtPwm(${setEndtPwm2});`);
  }

  //机械臂E4状态
  //% block="add [getState1] " blockType="reporter"
  //% getState1.shadow="dropdown" getState1.options="LINE" getState1.defl="LINE.1"

  export function E4_getState(parameter: any, block: any) {
    let getState1 = parameter.getState1.code;

    Generator.addCode(`E4${getState1}.getState()`);
  }

  //机械臂E4状态1
  //% block="add [getState11] add[getState12]" blockType="boolean"
  //% getState11.shadow="dropdown" getState11.options="LINE" getState11.defl="LINE.1"
  //% getState12.shadow="dropdown" getState12.options="TATE" getState12.defl="TATE.1"
  export function E4_getState1(parameter: any, block: any) {
    let getState11 = parameter.getState11.code;
    let getState12 = parameter.getState12.code;

    Generator.addCode(`E4${getState11}.getState()==${getState12}`);
  }

  //机械臂E4版本号
  //% block="add [getVersions1] " blockType="reporter"
  //% getVersions1.shadow="dropdown" getVersions1.options="LINE" getVersions1.defl="LINE.1"

  export function E4_getVersions(parameter: any, block: any) {
    let getVersions1 = parameter.getVersions1.code;

    Generator.addCode(`E4${getVersions1}.getVersions()`);
  }
  // //机械臂串口监视器开启与关闭
  // //% block="add [setSerialMonitor1] add[setSerialMonitor2] " blockType="command"
  // //% setSerialMonitor1.shadow="dropdown" setSerialMonitor1.options="LINE" setSerialMonitor1.defl="LINE.1"
  // //% setSerialMonitor2.shadow="dropdown" setSerialMonitor2.options="ON_OFF" setSerialMonitor2.defl="ON_OFF.1"

  // export function Mirobot_setSerialMonitor(parameter: any, block: any) {
  //   let setSerialMonitor1 = parameter.setSerialMonitor1.code;
  //   let setSerialMonitor2 = parameter.setSerialMonitor2.code;
  //   Generator.addSetup(
  //     `init.setSerialMonitor${setSerialMonitor1}`,
  //     `mirobot${setSerialMonitor1}.setEndtPump(${setSerialMonitor2},&Serial);`
  //   );
  //   // Generator.addCode(
  //   //   `mirobot${setSerialMonitor1}.setEndtPump(${setSerialMonitor2});`
  //   // );
  // }

  //% block="---"
  export function noteSep() { }

  //步进电机初始化
  //% block="add [INIT11] add [INIT12] add [INIT13]" blockType="command"
  //% INIT11.shadow="dropdown" INIT11.options="LINE" INIT11.defl="LINE.1"
  //% INIT12.shadow="range" INIT12.params.min="0" INIT12.params.max="255" INIT12.defl="2"
  //% INIT13.shadow="dropdown" INIT13.options="LINE1" INIT13.defl="LINE1.38400"
  export function stepping_init(parameter: any, block: any) {
    let init11 = parameter.INIT11.code;
    let init12 = parameter.INIT12.code;
    let init13 = parameter.INIT13.code;

    Generator.addInclude("WLKATA_mirobot", "#include <WLKATA.h>");
    Generator.addObject(`init${init11}`, `MS4220_UART`, `stepping${init11};`);
    Generator.addSetup(`init.begin${init13}`, `Serial1.begin(${init13});`);
    Generator.addSetup(
      `init.begin1${init11}`,
      `stepping${init11}.init(${init12});`
    );
  }

  //步进电机空闲状态下执行下一条
  //% block="add [IDLE1]" blockType="command"
  //% IDLE1.shadow="dropdown" IDLE1.options="LINE" IDLE1.defl="LINE.1"
  export function stepping_idle(parameter: any, block: any) {
    let init1 = parameter.IDLE1.code;

    Generator.addCode(`stepping${init1}.waitIdle();`);
  }

  //步进电机穿透指令
  //% block="add [MSG1]add[MSG2]add[MSG3]" blockType="command"
  //% MSG1.shadow="dropdown" MSG1.options="LINE" MSG1.defl="LINE.1"
  //% MSG2.shadow="dropdown" MSG2.options="ON_OFF" MSG2.defl="ON_OFF.0"
  //% MSG3.shadow="string"  MSG3.defl="o100"

  export function stepping_sendMsg(parameter: any, block: any) {
    let msg1 = parameter.MSG1.code;
    let msg2 = parameter.MSG2.code;
    let msg3 = parameter.MSG3.code;

    Generator.addCode(`stepping${msg1}.sendMsg(${msg3},${msg2});`);
  }

  //步进电机速度控制
  //% block="add [SpeedRatio1] add[SpeedRatio2]" blockType="command"
  //% SpeedRatio1.shadow="dropdown" SpeedRatio1.options="LINE" SpeedRatio1.defl="LINE.1"
  //% SpeedRatio2.shadow="range"  SpeedRatio2.params.min=0    SpeedRatio2.params.max=100    SpeedRatio2.defl=50

  export function stepping_setMoveSpeed(parameter: any, block: any) {
    let SpeedRatio1 = parameter.SpeedRatio1.code;
    let SpeedRatio2 = parameter.SpeedRatio2.code;

    Generator.addCode(`stepping${SpeedRatio1}.setMoveSpeed(${SpeedRatio2});`);
  }

  //步进电机归航
  //% block="add [HOMING1]" blockType="command"
  //% HOMING1.shadow="dropdown" HOMING1.options="LINE" HOMING1.defl="LINE.1"

  export function stepping_homing(parameter: any, block: any) {
    let homing1 = parameter.HOMING1.code;

    Generator.addCode(`stepping${homing1}.homing(${homing2});`);
  }

  //步进电机重启
  //% block="add [RESET1]" blockType="command"
  //% RESET1.shadow="dropdown" RESET1.options="LINE" RESET1.defl="LINE.1"

  export function stepping_zero(parameter: any, block: any) {
    let homing1 = parameter.RESET1.code;

    Generator.addCode(`stepping1${homing1}.zero();`);
  }

  //步进电机速度绝对位置控制
  //% block="add [SpeedRatio1] add[SpeedRatio2] add[SpeedRatio3]" blockType="command"
  //% SpeedRatio1.shadow="dropdown" SpeedRatio1.options="LINE" SpeedRatio1.defl="LINE.1"
  //% SpeedRatio2.shadow="range"  SpeedRatio2.params.min=0    SpeedRatio2.params.max=100    SpeedRatio2.defl=50
  //% SpeedRatio3.shadow="number" SpeedRatio3.defl="50"

  export function stepping_setMovePos(parameter: any, block: any) {
    let SpeedRatio1 = parameter.SpeedRatio1.code;
    let SpeedRatio2 = parameter.SpeedRatio2.code;
    let SpeedRatio3 = parameter.SpeedRatio3.code;

    Generator.addCode(
      `stepping${SpeedRatio1}.setMovePos(${SpeedRatio3},${SpeedRatio2});`
    );
  }

  //步进电机状态
  //% block="add [getState1] " blockType="reporter"
  //% getState1.shadow="dropdown" getState1.options="LINE" getState1.defl="LINE.1"

  export function stepping_getState(parameter: any, block: any) {
    let getState1 = parameter.getState1.code;

    Generator.addCode(`stepping${getState1}.getState()`);
  }

  //% block="---"
  export function noteSep1() { }

  //板载蜂鸣器1
  //% block="add [Buzzer1]" blockType="command"
  //% Buzzer1.shadow="dropdown" Buzzer1.options="ON_OFF" Buzzer1.defl="ON_OFF.1"

  export function Arduino_shieldBuzzerWrite(parameter: any, block: any) {
    let Buzzer1 = parameter.Buzzer1.code;

    Generator.addInclude("WLKATA_mirobot", "#include <WLKATA.h>");
    Generator.addSetup(`init1`, `shieldInit();`);
    Generator.addCode(`shieldBuzzerWrite(${Buzzer1});`);
  }

  //板载蜂鸣器2
  //% block="add [Buzzer1]" blockType="command"
  //% Buzzer1.shadow="dropdown" Buzzer1.options="BUZZER" Buzzer1.defl="BUZZER.0"

  export function Arduino_shieldBuzzer(parameter: any, block: any) {
    let Buzzer1 = parameter.Buzzer1.code;

    Generator.addInclude("WLKATA_mirobot", "#include <WLKATA.h>");
    Generator.addSetup(`init1`, `shieldInit();`);
    Generator.addCode(`shieldBuzzer(${Buzzer1});`);
  }

  //板载RGB灯
  //% block="add [RGB_color1]" blockType="command"
  //% RGB_color1.shadow="dropdown" RGB_color1.options="RGB" RGB_color1.defl="RGB.WHITE"

  export function Arduino_RGB_color(parameter: any, block: any) {
    let RGB_color1 = parameter.RGB_color1.code;

    Generator.addInclude("WLKATA_mirobot", "#include <WLKATA.h>");
    Generator.addSetup(`init1`, `shieldInit();`);
    Generator.addCode(`RGB_color(${RGB_color1});`);
  }

  //板载按键
  //% block="add [shieldSwitchRead1] add[shieldSwitchRead2]" blockType="boolean"
  //% shieldSwitchRead1.shadow="dropdown" shieldSwitchRead1.options="KEY" KEY.defl="RGB.3"
  //% shieldSwitchRead2.shadow="dropdown" shieldSwitchRead2.options="KEY1" KEY1.defl="RGB.0"

  export function Arduino_shieldSwitchRead(parameter: any, block: any) {
    let shieldSwitchRead1 = parameter.shieldSwitchRead1.code;
    let shieldSwitchRead2 = parameter.shieldSwitchRead2.code;

    Generator.addInclude("WLKATA_mirobot", "#include <WLKATA.h>");
    Generator.addSetup(`init1`, `shieldInit();`);
    Generator.addCode(
      `shieldSwitchRead(${shieldSwitchRead1})==${shieldSwitchRead2}`
    );
  }

  //2560重启
  //% block="add" blockType="command"

  export function Arduino_reset(parameter: any, block: any) {
    Generator.addInclude("WLKATA_mirobot", "#include <WLKATA.h>");
    Generator.addSetup(`init1`, `shieldInit();`);
    Generator.addCode(`reset();`);
  }

  //GY33初始化设置
  //% block="add [setBrightness1] add[setBrightness2]" blockType="command"
  //% setBrightness1.shadow="dropdown" setBrightness1.options="GY33UART" KEY.defl="GY33UART.2"
  //% setBrightness2.shadow="dropdown" setBrightness2.options="GY33UART1" KEY1.defl="GY33UART1.0"

  export function GY33_setBrightness(parameter: any, block: any) {
    let shieldSwitchRead1 = parameter.shieldSwitchRead1.code;
    let shieldSwitchRead2 = parameter.shieldSwitchRead2.code;

    Generator.addInclude("WLKATA_mirobot", "#include <WLKATA.h>");
    Generator.addSetup(`init1${shieldSwitchRead1}`, ` GY33.init(&Serial${shieldSwitchRead1},9600);`);
    Generator.addCode(
      `GY33.setBrightness(${shieldSwitchRead2});`
    );
  }

  //GY33颜色传感器检测颜色
  //% block="add [readColor1]" blockType="boolean"
  //% readColor1.shadow="dropdown" readColor1.options="GY33UART2" KEY.defl="GY33UART2.0"

  export function GY33_readColor(parameter: any, block: any) {
    let readColor1 = parameter.readColor1.code;

    Generator.addInclude("WLKATA_mirobot", "#include <WLKATA.h>");
    Generator.addSetup(`init1`, `shieldInit();`);
    Generator.addCode(
      `readColor()==${readColor1}`
    );
  }

  //% block="---"
  export function noteSep2() { }

  //MINI小车控制前进后退
  //% block="add [Speed11] add[Speed12]" blockType="command"
  //% Speed11.shadow="dropdown" Speed11.options="DIRE" Speed11.defl="DIRE.w"
  //% Speed12.shadow="number" Speed12.defl="1000"

  export function MINICAT_Speed1(parameter: any, block: any) {
    let Speed11 = parameter.Speed11.code;
    let Speed12 = parameter.Speed12.code;
    Generator.addSetup(`init.begin`, `Serial2.begin(115200);`);
    Generator.addCode(`Serial2.print("AT=${Speed11}${Speed12}\\r\\n");`);
  }

  //MINI小车循线控制
  //% block="add [Speed21] add[Speed22]" blockType="command"
  //% Speed21.shadow="number" Speed21.defl="1000"
  //% Speed22.shadow="number" Speed22.defl="400"

  export function MINICAT_Speed2(parameter: any, block: any) {
    let Speed21 = parameter.Speed21.code;
    let Speed22 = parameter.Speed22.code;
    Generator.addSetup(`init.begin`, `Serial2.begin(115200);`);
    Generator.addCode(`Serial2.print("AT=${Speed21},${Speed22}\\r\\n");`);
  }

  //MINI小车转弯控制
  //% block="add [Speed31] " blockType="command"
  //% Speed31.shadow="dropdown" Speed31.options="DIRE1" Speed31.defl="DIRE1.x"

  export function MINICAT_Speed3(parameter: any, block: any) {
    let Speed31 = parameter.Speed31.code;
    Generator.addSetup(`init.begin`, `Serial2.begin(115200);`);
    Generator.addCode(`Serial2.print("AT=${Speed31}\\r\\n");`);
  }

  //MINI小车速度控制
  //% block="add [Speed41] " blockType="command"
  //% Speed41.shadow="range" Speed41.params.min=0    Speed41.params.max=200    Speed41.defl="150"

  export function MINICAT_Speed4(parameter: any, block: any) {
    let Speed41 = parameter.Speed41.code;
    Generator.addSetup(`init.begin`, `Serial2.begin(115200);`);
    Generator.addCode(`Serial2.print("AT=p${Speed41}\\r\\n");`);
  }

  //MINI小车风扇控制
  //% block="add [Speed51] " blockType="command"
  //% Speed51.shadow="dropdown" Speed51.options="DIRE2" Speed51.defl="DIRE2.1"

  export function MINICAT_Speed5(parameter: any, block: any) {
    let Speed51 = parameter.Speed51.code;
    Generator.addSetup(`init.begin`, `Serial2.begin(115200);`);
    Generator.addCode(`Serial2.print("AT=f${Speed51}\\r\\n");`);
  }
}
