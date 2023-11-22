#ifndef RGB_H
#define RGB_H

#include "Arduino.h"

enum COLOR{
	BLACK, RED, BLUE, GREEN, WHITE, YELLOW, ORANGE, VIOLET
};

void RGB_init(uint8_t r_pin, uint8_t g_pin, uint8_t b_pin, bool flag=false);//RGB初始化
void RGB_color(uint8_t _color);//设置RGB颜色

#endif
