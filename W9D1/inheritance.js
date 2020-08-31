// INHERITS

Function.prototype.inherits = function(ParentClass) {
    function Surrogate() {}
    Surrogate.prototype = ParentClass.prototype
    this.prototype = new Surrogate();
    this.prototype.constructor = this;

}

// method using Object.create

Function.prototype.inherits2 = function(ParentClass) {
    this.prototype = Object.create(ParentClass.prototype);
    this.prototype.constructor = this;
}


function MovingObject(part) {
    this.part = part
 }
MovingObject.prototype.fly= function() {
    console.log(this.part + "flies")
}

function Ship(part) {
    MovingObject.call(this, part)
 }
Ship.inherits(MovingObject);

function Asteroid(part) { 
    MovingObject.call(this, part)
}
Asteroid.inherits2(MovingObject);