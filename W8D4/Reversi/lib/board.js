let Piece = require("./piece");

/**
 * Returns a 2D array (8 by 8) with two black pieces at [3, 4] and [4, 3]
 * and two white pieces at [3, 3] and [4, 4]
 */
function _makeGrid () {
  this.grid = [];
  for(i=0; i<8;i++) {
    let el = new Array(8);
    grid.push(el);
  }
  grid[3][4] = new Piece("black")
  grid[4][3] = new Piece("black")
  grid[3][3] = new Piece("white")
  grid[4][4] = new Piece("white")

  return grid;

}

/**
 * Constructs a Board with a starting grid set up.
 */
function Board () {
  this.grid = _makeGrid();
}

Board.DIRS = [
  [ 0,  1], [ 1,  1], [ 1,  0],
  [ 1, -1], [ 0, -1], [-1, -1],
  [-1,  0], [-1,  1]
];

/**
 * Checks if a given position is on the Board.
 */
Board.prototype.isValidPos = function (pos) {
  if ((pos[0] >= 0 && pos[0] < 8) && (pos[1] >= 0 && pos[1] < 8)) {
     return true;
   }
   return false; 
  
};


/**
 * Returns the piece at a given [x, y] position,
 * throwing an Error if the position is invalid.
 */
Board.prototype.getPiece = function (pos) {
  if(this.isValidPos(pos) === true) {
    return this.grid[pos[0]][pos[1]];
  }
  else {
    throw new Error("Not valid pos!");
  }
};

  
/**
 * Checks if the piece at a given position
 * matches a given color.
 */
Board.prototype.isMine = function (pos, color) {
    if(this.getPiece(pos)) {
    return this.getPiece(pos).color === color;
  }
};

/**
 * Checks if a given position has a piece on it.
 */
Board.prototype.isOccupied = function (pos) {
  return this.getPiece(pos) != undefined;
};

/**
 * Recursively follows a direction away from a starting position, adding each
 * piece of the opposite color until hitting another piece of the current color.
 * It then returns an array of all pieces between the starting position and
 * ending position.
 *
 * Returns an empty array if it reaches the end of the board before finding another piece
 * of the same color.
 *
 * Returns empty array if it hits an empty position.
 *
 * Returns empty array if no pieces of the opposite color are found.
 */
Board.prototype._positionsToFlip = function(pos, color, dir, piecesToFlip){
    // setting variables
    let sum = pos.map(function (num, idx) {
      return num + dir[idx];
    });

    if(piecesToFlip === undefined) {
      piecesToFlip = [];
    };
    

    // base cases
    if(!this.isValidPos(pos)) {
      return [];
    };
    
    if ((!this.isValidPos(sum)) || (!this.isOccupied(sum))) {
      return [];
    };

    //  end case
    if (this.isMine(sum, color)) {
      return piecesToFlip;
    };

  
    // inductive step
    piecesToFlip.push(sum);
  
    return this._positionsToFlip(sum, color, dir, piecesToFlip);
};

/**
 * Checks that a position is not already occupied and that the color
 * taking the position will result in some pieces of the opposite
 * color being flipped.
 */
Board.prototype.validMove = function (pos, color) {
  if (this.isOccupied(pos)) {
    return false;
  }
  // Board.DIRS.forEach(ele => this._positionsToFlip(pos, color, ele))
  
  for(let i = 0; i < Board.DIRS.length; i++ ) {
    // debugger;
    dir = Board.DIRS[i]
    arr = this._positionsToFlip(pos, color, dir);
    if(arr.length > 0) {
      return true;
    }
  }
  return false;
};

/**
 * Adds a new piece of the given color to the given position, flipping the
 * color of any pieces that are eligible for flipping.
 *
 * Throws an error if the position represents an invalid move.
 */
Board.prototype.placePiece = function (pos, color) {
  if (this.validMove(pos , color) === false) {
    // debugger;
    throw new Error("Invalid Move");
  }
  this.grid[pos[0]][pos[1]] = new Piece(color);

  let need_flipped = [];

  for (let i = 0; i < Board.DIRS.length; i++) {
    // debugger;
    dir = Board.DIRS[i];
    arr = this._positionsToFlip(pos, color, dir);
    // console.log(arr)
    need_flipped = need_flipped.concat(arr);
    // console.log(need_flipped)
  }

  // debugger;
  for (let i = 0; i < need_flipped.length ; i++) {
    // debugger;
    pos = need_flipped[i];
    piece = this.grid[pos[0]][pos[1]];
    piece.flip();
  }
};

/**
 * Produces an array of all valid positions on
 * the Board for a given color.
 */
Board.prototype.validMoves = function (color) {
  const all_possibles = [];
  len = this.grid.length;
  for(let i = 0; i < len; i++) {
    for(let j = 0; j < len; j++) {
      pos = [i, j];
        if(this.isValidPos(pos) && this.validMove(pos, color) === true) {
          all_possibles.push(pos);
        }
    }
  }
  return all_possibles;
};

/**
 * Checks if there are any valid moves for the given color.
 */
Board.prototype.hasMove = function (color) {
  return this.validMoves(color).length > 0;
};



/**
 * Checks if both the white player and
 * the black player are out of moves.
 */
Board.prototype.isOver = function () {
   if ((this.hasMove('white')) && (this.hasMove('black'))) {
     return false;
   } else {
     return true;
   }
};




/**
 * Prints a string representation of the Board to the console.
 */
Board.prototype.print = function () {
  
  for(let i=0; i < 8; i++) {
    let row = '';
    for(let j = 0;j < 8; j++) {
      if(this.grid[i][j] === undefined) {
        row += ' - ';
      }
      else {
        row += ' ' + this.grid[i][j].toString() + ' ';
      }
    }
    console.log(row)
  }
};



module.exports = Board;
