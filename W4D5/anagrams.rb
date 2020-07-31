
# anagram?("gizmo", "sally")    #=> false
# anagram?("elvis", "lives")    #=> true

def first_anagram?(str_1,str_2)
    possibles = str_1.split('').permutation.to_a
    possibles.include?(str_2.split(''))
end
    
# p first_anagram?("elvis", "lives")    #=> true

#  Complexity O(n!) EWWWWWWWWW! NONONONONO
require 'byebug'

def second_anagram?(str_1, str_2)
    possibles = str_2.split("") #O(n)TA ASK PLS
    # debugger 
    str_1.split("").each do |letter| #O(n^2) #possibles[x] TA ASK PLS
        x = possibles.find_index(letter)#O(n)
        possibles.delete_at(x)#O(n) 
        # debugger 
    end
    # debugger
    possibles.length == 0
end

# p second_anagram?("elvis", "lives") 

def third_anagram?(str_1,str_2)
    str_1.split('').sort == str_2.split('').sort
end

#  Quicksort, O(n log n)  (Worst O(n^2))

# p third_anagram?("elvis", "lives") 

def fourth_anagram?(str_1,str_2)
    hash_1 = Hash.new(0) #O(1)
    hash_2 = Hash.new(0) #O(1)
    
    str_1.each_char {|char| hash_1[char] += 1} #O(n)
    str_2.each_char {|char| hash_2[char] += 1} #O(n)
    
    hash_1 == hash_2
end

#O(2n) => n

def fifth_anagram?(str_1,str_2)
    hash = Hash.new(0) #O(1)
    
    str_1.each_char {|char| hash[char] += 1} #O(n)
    str_2.each_char do |char| 
        hash[char] -= 1 if hash.has_key?(char) #O(n)
    end
    
    hash.values.all? {|val| val == 0}
end

#O(2n) => n


p fifth_anagram?("elvis", "lives") 
