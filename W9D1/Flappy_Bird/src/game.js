
import Level from "./level"

export default class FlappyBird {
  constructor(canvas){
    this.ctx = canvas.getContext("2d");
    this.dimensions = { width: canvas.width, height: canvas.height };

    
  }
  // drawing the background
  animate() {
    this.level.animate(this.ctx)
  }

  restart() {
    
  }
}