const Util = require("./utils");
const MovingObject = require("./moving_object");


const DEFAULT = {
    COLOR: "silver",
    RADIUS: 15,
    SPEED: 5
}
function Ship(args) {
    args.pos = args["pos"];
    args.vel = Util.randomVec(DEFAULT.SPEED);
    args.radius = DEFAULT.RADIUS;
    args.color = DEFAULT.COLOR;
    MovingObject.call(this, args);
};
Ship.prototype.relocate = function() {
    this.pos = this.game.randomPosition();
    this.vel = [0, 0];
};

new Ship({ pos: [30, 30] });

Util.inherits(Ship, MovingObject)

module.exports = Ship;