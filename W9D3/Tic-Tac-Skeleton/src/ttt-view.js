class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;

    this.setupBoard()
    this.bindEvents();
    this.makeMove
  }

  bindEvents() {
    $('li').on("click", e => {
      
      const hot_garbage = e.currentTarget.id.split(',').map((x) => parseInt(x))
      const currentMark = this.game.currentPlayer;
      this.game.playMove(hot_garbage)
      // debugger;
      e.currentTarget.textContent = (`${currentMark}`)
      $(e.currentTarget).addClass(`${currentMark}`)
      // debugger;

      if (this.game.isOver()) {
        $('li').off('click')
        // $('li').addClass("gameover")

        const winner = this.game.winner();
        const $h1 = $(`<h1 class= 'winner'>${this.game.winner()} wins</h1>`)
        const $h2 = $(`<h1 class= 'draw'>Draw</h1>`)

        if (winner) {
          
          setInterval( $('.ttt').append.bind($('.ttt'), $h1), 500);
        } else {
          $('.ttt').append($h2)
        }

      }
    });
  }

  makeMove($square) {}

  setupBoard() {
    const $ul = $("<ul>");
    // const $li = $("<li>")
    for(let i = 0; i < 3; i++){
      for (let j = 0; j < 3; j++) {
        const $li = $("<li>").attr('id',`${[i,j]}`)      
        $ul.append($li)

      }
    }
    // const $ttt = $(".ttt");
    this.$el.append($ul)
    
  }
}

module.exports = View;
 