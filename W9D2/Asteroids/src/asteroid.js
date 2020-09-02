const Util = require("./utils");
const MovingObject = require("./moving_object");


const DEFAULT = {
    COLOR: "brown",
    RADIUS: 20,
    SPEED: 5
}
function Asteroid(args) {
    args.pos = args["pos"];
    args.vel = Util.randomVec(DEFAULT.SPEED);
    args.radius = DEFAULT.RADIUS;
    args.color = DEFAULT.COLOR;
    MovingObject.call(this, args);
}

new Asteroid({ pos: [30, 30] });

Util.inherits(Asteroid, MovingObject)
module.exports = Asteroid;

// let x = Asteroid({ pos: [30, 30] });