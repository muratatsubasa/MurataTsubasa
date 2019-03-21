# AND関数
# 順位に合わせてメッセージを表示する
number = rand(1..10)
puts "あなたの順位は#{number}位です"

##　ここにifを追加する
if number < 6 && 1 < number
  puts "もう少し！"
end
# if文を追加して、2位から5位の時には「あと少し！」とAND関数[&&]を用いて表示するようにしてください。