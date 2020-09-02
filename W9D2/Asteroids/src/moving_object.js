const Util = require("./utils.js");

function MovingObject(args) {
    this.pos = args["pos"];
    this.vel = args["vel"];
    this.rad = args["radius"];
    this.color = args["color"];
    this.game = args["game"];
  }

  
  
// const mo = new MovingObject({
//     pos: [30, 30],
//     vel: [10, 10],
//     radius: 5,
//     color: "#00FF00"
//   });

  //   const canvEle = document.getElementById("canvas");
//   const ctx = canvEle.getContext("2d"); for the game func

MovingObject.prototype.draw = function(ctx){
    ctx.beginPath();
    ctx.strokeStyle = this.color.toString();
    ctx.arc(this.pos[0],this.pos[1], this.rad,0,2 * Math.PI);
    ctx.stroke();
    ctx.fillStyle = this.color.toString();
    ctx.fill();
}

MovingObject.prototype.move = function(ctx) {
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
    this.pos = this.game.wrap(this.pos);
    this.draw(ctx);
}
MovingObject.prototype.isCollide = function(otherObject){
  const rad1 = this.rad;
  const rad2 = otherObject.rad;
  const distance = Math.sqrt(((this.pos[0] - otherObject.pos[0]) ** 2) + ((this.pos[1] - otherObject.pos[1]) ** 2))
  if(distance < (rad1 + rad2)){
    // console.log("COLLISON")
    return true;
  }
  return false;
}

module.exports = MovingObject;

