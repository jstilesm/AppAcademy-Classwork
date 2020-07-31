    
    list = [ 0, 3, 5, 4, -5, 10, 1, 90 ]

    def my_min(arr)
        sorted = false #O(1)
        while !sorted #O(n)
            sorted = true
            (0...arr.length - 1).each do |i| # O(n)
                if arr[i] > arr[i+1] 
                    arr[i], arr[i+1] = arr[i+1], arr[i]
                    sorted = false
                end
            end
        end
        arr[0]
    end

    # p my_min(list)  # =>  -5

    # Time complexity? O(n^2)

    def my_min_2(arr)
        minimum = arr[0]
        arr.each { |ele| minimum = ele if ele < minimum }
        minimum
    end


    # p my_min_2(list)

    list = [5, 3, -7] # => 8
    list2 = [2, 3, -6, 7, -6, 7] # => 8
    list3 = [-5, -1, -3] # => -1
    # Largest Contiguous Sub-sum

    def lcs(arr)
        new_array = []
        (0...arr.length).each do |i| #O(n^3)
            new_array << [arr[i]]
            (i+1...arr.length).each do |j| 
                new_array << arr[i..j] #O(n)
            end
        end
        new_array.map! {|array| array.sum } #O(n^2)
        new_array.max #O(N)
    end


    # p lcs(list)
    # p lcs(list2)
    # p lcs(list3)

# Time Complexity 
#1 O(n) is 2n^2 => O(n^2)


def lcs2(arr)#[2, 3, -6, 7, -6, 7]
    largest_sum = 0 #5
    current_sum = 0 #1
    # point_sum = 0 

    (0...arr.length).each do |i| #O(m)
        current_sum += arr[i] 
        # point_sum = arr[i]
        if current_sum > largest_sum
            largest_sum = current_sum 
        elsif current_sum < 0
            current_sum = 0
        end
    end

    largest_sum
end

p lcs2([2, 3, -6, 7, -6, 7])

# list = [5, 3, -7] # => 8
# list2 = [2, 3, -6, 7, -6, 7] # => 8
# list3 = [-5, -1, -3] # => -1
