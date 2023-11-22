#ifndef BASE_H
#define BASE_H

#include "Arduino.h"

#define OFF 0
#define ON 1
#define IN 1
#define OUT 2
#define OPEN 1
#define CLOSE 2

#define Offline 0
#define Idle 1
#define Alarm 2
#define Home 3
#define Run 4
#define Hold 5
#define Busy 6

#define Axis1 1
#define Axis2 2
#define Axis3 3
#define Axis4 4
#define Axis5 5
#define Axis6 6
#define AxisEX 7
#define AxisALL 0

String stateToStr(int num);

#endif
