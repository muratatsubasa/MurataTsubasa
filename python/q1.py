# coding: utf-8
import random
omikuji = random.randint(1, 100)
if omikuji < 31:
    print("大吉")
else:
    print("大凶")
#if文
print("おみくじの数字は" + str(omikuji) +"です")
# 数値が３０以下場合
# おみくじの中身が[1~30]なので大吉

# 数値が３０以上の場合
# おみくじの中身が[30〜１００]なので大凶
