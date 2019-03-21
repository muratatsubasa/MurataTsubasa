# coding: utf-8
import random
number = random.randint(1, 10)	# 匹数 1 ～ 10
print("体重100キロのスライムが" + str(number) + "匹あらわれた")
# 合計体重 = 匹数 x 100
kiro = (number * 100)
print("スライムの合計体重は" + str(kiro) + "キロです")