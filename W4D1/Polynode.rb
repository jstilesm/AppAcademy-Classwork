class PolyTreeNode

    attr_reader :children, :value

    def initialize(value)
        @value = value
        @parent = nil
        @children = []
    end

    def parent
        @parent
    end

    def children
        @children
    end

    def value
        @value
    end

    def parent=(node)
        old_parent = self.parent
        if old_parent != nil
            old_parent.children.select! {|child| child != self}
        end
        @parent = node
        if node != nil && !node.children.include?(self)
            node.children << self
        end
    end

    def add_child(child_node)
        child_node.parent=(self)
    end

    def remove_child(child_node)
        if self.children.include?(child_node) 
            child_node.parent=(nil)
        else
            raise "Not a Child"
        end
    end

    def dfs(target_value)
        if self.value == target_value
            return self
        end
        
        self.children.each do |child|
            node = child.dfs(target_value)
            if node != nil
                return node
            end
        end 
        return nil
    end

    def bfs(target_value)
        # debugger
        queue = [self]
        # debugger
        # queue.concat(self.children)
        until queue.empty?
            # debugger
            first = queue.shift
            if first.value == target_value
                return first
            end
            queue.concat(first.children)
        end
        return nil
    end
end



