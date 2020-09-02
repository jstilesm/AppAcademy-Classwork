const MovingObject = require("./moving_object.js");
const Asteroid = require("./asteroid.js");
const Game = require("./game.js");
const Gameview = require("./game_view.js")

console.log("Webpack is working!")
window.addEventListener('DOMContentLoaded', (event) => {
    const canvEle = document.getElementById("game-canvas");
    canvEle.width = 500;
    canvEle.height= 500;
    const ctx = canvEle.getContext("2d");
    window.ctx = ctx;
    const gameOne = new Game();
    const Gamer = new Gameview(gameOne, ctx);
    Gamer.start();
    console.log('DOM fully loaded and parsed');
});


window.MovingObject = MovingObject;
window.Asteroid = Asteroid;
window.Game = Game;
window.Gameview = Gameview;

