# coding: utf-8
# if文による条件分岐
import random
number = random.randint(1,3) * 100
print("あなたの得点は" + str(number) + "ポイントです")
if number == 300:
    print("おめでとう")
# 300ポイントの時
# あなたの得点は300ポイントです
# おめでとう
else:
    print("残念です")
# 300ポイント以外の時
# あなたの得点は100~200ポイントです
# 残念です