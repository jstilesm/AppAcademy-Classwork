require_relative 'tic_tac_toe'
require "byebug"
class TicTacToeNode

  attr_reader :board, :next_mover_mark, :prev_move_pos

  def initialize(board, next_mover_mark, prev_move_pos = nil)
    @board = board
    @next_mover_mark = next_mover_mark
    @prev_move_pos = prev_move_pos
  end

  def losing_node?(evaluator)
    return nil if !@board.empty?
    
  end

  def winning_node?(evaluator)
  end

  # This method generates an array of all moves that can be made after
  # the current move.
  def children
    array = []
    grid = self.board.rows

    # debugger
    grid.each_with_index do |row, i|
      row.each_with_index do |ele, j|
        if ele == nil
          if self.next_mover_mark == :x
            new_board = self.board.dup
            node = TicTacToeNode.new(new_board, :o, [i,j])
            node.board.rows[i][j] = self.next_mover_mark
            array << node
          else
            new_board = self.board.dup
            node = TicTacToeNode.new(new_board, :x, [i,j])
            node.board.rows[i][j] = self.next_mover_mark
            array << node
          end
        end
      end
    end 
    array    
  end
end

