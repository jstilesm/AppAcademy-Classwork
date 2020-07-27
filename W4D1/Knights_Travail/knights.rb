require_relative "Polynode"

class KnightPathFinder
    

    attr_reader :starting_position, :root_node

    def initialize(starting_position)
        @root_node = PolyTreeNode.new(starting_position)
        @considered_positions = [starting_position]

    end

    require "byebug"
    def build_move_tree
        #debugger
        queue = [@root_node]

        while queue.length > 0
            first_one = queue.shift
            
            childrens = new_move_positions(first_one.value)
            
            childrens.each do |p|
                first_one.add_child(PolyTreeNode.new(p))
            end
            
            first_one.children.each do |child|
                child.parent = first_one
            end

            queue.concat(first_one.children)
        end
    end

    def self.valid_moves(pos)
        # debugger
        arr = []
        moveset = [[1,2],[-1,-2],[2,1],[-2,1],[-1,2],[2,-1],[-2,-1],[1,-2]]
        row, col = pos
        moveset.each do |move|
            p = []
            move.each_with_index do |c,i|
                p << row + c if i == 0
                p << col + c if i == 1
                
            end
            arr << p
        end

        # i = 1
        # j = 2
        # arr << [pos[0] + i, pos[1] + j] #right 1 up 2
        # arr << [pos[0] - i, pos[1] + j] #left 1 up 2 
        # arr << [pos[0] - j, pos[1] + i] #left 2 up 1
        # arr << [pos[0] - j, pos[1] - i] #left 2 down 1
        # arr << [pos[0] - i, pos[1] - j] #left 1 down 2 
        # arr << [pos[0] + i, pos[1] - j] #right 1 down 2
        # arr << [pos[0] + j, pos[1] + i] #right 2 up 1
        # arr << [pos[0] + j, pos[1] - i] #right 2 down 1

        #  storing all possibles in a stored array and iterating through
        on_board = []
        arr.select do |move|
            on_board << move if ((move[0] < 8) && (move[0] >= 0)) && ((move[1] < 8) && (move[1] >= 0))
        end
        on_board 
    end

    def new_move_positions(pos)
        new_array = []
        array = KnightPathFinder.valid_moves(pos) 
        array.each do |ele|
            if !@considered_positions.include?(ele)
                @considered_positions << ele
                new_array << ele
            end
        end
        return new_array
    end

    def find_path(end_pos)
        node = self.root_node.dfs(end_pos)
        node if node != nil
        trace_path_back(node)
    end

    def trace_path_back(node)
        array = [node.value]
        next_parent = node.parent
        while next_parent != nil
            array << next_parent.value
            next_parent = find_parent(next_parent)
        end
        array.reverse
    end

    def find_parent(node)
        node.parent
    end
    
end


k = KnightPathFinder.new([0,0])

k.build_move_tree

p k.find_path([7,6])

# k.trace_path_back()


