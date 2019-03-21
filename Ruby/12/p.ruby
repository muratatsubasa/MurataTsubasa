# 税込み金額を計算する

price = 1980
puts "定価:#{price}円"

#15%引き
discount_price = (price * 0.85).to_i
puts "割引価格は、#{discount_price}円です"

# 税込
amount = (discount_price * 1.08).to_i
puts "税込価格は、#{amount}円です。"

# 人数
person = rand(2..5)
puts "人数が、#{person}人の場合、"
amount_per_person = amount /person

# 余り
remainder = amount % person

# 結果
puts "一人当たり#{amount_per_person}円です。余りは#{remainder}円です。"