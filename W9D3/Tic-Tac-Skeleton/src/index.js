const View = require("./ttt-view.js")
const Game = require("./game.js") 

  $(() => {
    // Your code here
    // console.log('heyo')

    const $mainView = $('.ttt');
    const game = new Game();
    const view = new View(game, $mainView);

  });
