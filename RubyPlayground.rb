
puts (1..10).select{|x|x % 2 ==0}.reduce(:+)
