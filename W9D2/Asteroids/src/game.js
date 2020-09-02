const Util = require("./utils");
const Asteroid = require("./asteroid");
const Ship = require("./ship");


Game.BG_COLOR = "white";
Game.DIM_X = 500;
Game.DIM_Y = 500;
Game.FPS = 32;
Game.NUM_ASTEROIDS = 10;

function Game() {
    this.asteroids = [];
    this.addAsteroids();
    this.ship = [new Ship( {pos: this.randomPosition(), game: this})];
    this.everyObject = this.allObjects();
    this.draw(ctx);
  }


Game.prototype.addAsteroids = function(){
    // let numAster = 10;
    for(let i = 0; i < Game.NUM_ASTEROIDS; i++){
        this.asteroids.push(new Asteroid({ pos: this.randomPosition(), game: this }));
    }
}

Game.prototype.allObjects = function(){
   return [].concat(this.ship, this.asteroids);
}

Game.prototype.move = function(ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    ctx.fillStyle = Game.BG_COLOR;
    ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);
    for(let i = 0; i < this.everyObject.length; i++){
        this.everyObject[i].move(ctx);
    }
}

Game.prototype.step = function(){
    this.move(ctx);
    this.checkCollisions();
}


Game.prototype.draw = function(ctx) {
    for(let i = 0; i < this.everyObject.length; i++){
        this.everyObject[i].draw(ctx);
    }
}

Game.prototype.randomPosition = function(){
     return [Game.DIM_X * Math.random(),Game.DIM_Y * Math.random()]
}

Game.prototype.checkCollisions = function(){
    for(let i = 0; i < this.everyObject.length; i++){
        for(let j = 0; j < this.everyObject.length; j++){
            if(this.everyObject[i].isCollide(this.everyObject[j]) && i !== j){
                this.remove(this.everyObject[i]);
                this.remove(this.everyObject[j]);
            }
        }
    }
}
Game.prototype.remove = function remove(object){
    if (object instanceof Asteroid){
        this.everyObject.splice(this.everyObject.indexOf(object), 1);
    }else if(object instanceof Ship){
        console.log(object);
        object.relocate();
    }

}
Game.prototype.wrap = function(pos) {
    if (pos[0] > 500){
        pos[0] = 0;
    } else if (pos[0] < 0) {
        pos[0] = Game.DIM_X
    } else if (pos[1] > 500) {
        pos[1] = 0;
    } else if (pos[1] < 0) {
        pos[1] = Game.DIM_Y
    }
    return pos;
}

module.exports = Game;