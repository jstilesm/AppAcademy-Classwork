const Game = require("./game.js");

function Gameview (game, ctx) {
    this.game = game;
    this.ctx = ctx;
}
Gameview.prototype.animate = function() {
    this.game.step();
}

Gameview.prototype.start = function start() {
    setInterval(this.animate.bind(this), 50);
    
}
// setInterval(function(){ alert("Hello"); }, 3000)
module.exports = Gameview;