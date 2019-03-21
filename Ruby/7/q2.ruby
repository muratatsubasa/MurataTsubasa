# if文による条件分岐
number = rand(1..5)
puts "あなたの順位は#{number}位です"
if number == 1
  puts "おめでとう！"
elsif number == 2
  puts "あと少し！"
else
  puts "よくがんばったね"
end

#間違い探し