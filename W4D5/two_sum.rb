# def two_sum(arr, target_sum)

# end

#1. nested loop -> trash
#2. make the hash with each of the numbers 
    #{   0: 1 
      #  1: 1 
      #  2: 5
      #  3: 7
    # }

    #iterate through hash adding value combos. 
    # hash.each_value do |v1| 
        #hash.each_value do |v2|
            #if v1 + v2 == targ, return 
            #end
        #end

#3. we could also use permuatation! just iterate and find pairs.
require 'byebug'
def brute_two_sum?(arr, target_sum)
  arr.each_with_index do |ele1, i1|
    arr.each_with_index do |ele2, i2|
      return true if ele1 + ele2 == target_sum && i2 > i1 
    end
  end

  false 
end



arr = [0, 1, 5, 7]
p brute_two_sum?(arr, 6) # => should be true
p brute_two_sum?(arr, 10) # => should be false


def sorted_two_sum(arr, target_sum)
    sorted = arr.sort # [7,5,1,0]
    
    mid = sorted.length / 2 

    # return if only two elements inside sorted 
end

def hash_map_two_sum(arr,target_sum)
    hash = {}

    arr.each_with_index do |ele, i|
        hash[i] = ele
    end

      #{ 0: 1 
      #  1: 1 
      #  2: 5
      #  3: 7
    # 

end

