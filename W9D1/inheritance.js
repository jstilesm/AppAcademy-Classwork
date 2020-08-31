// INHERITS

Function.prototype.inherits = function(ParentClass) {
    function Surrogate() {}
    Surrogate.prototype = ParentClass.prototype
    this.prototype = new Surrogate();
    this.prototype.constructor = this;

}
// surrogate helps aleviate having to call Animal over and over again
// provides inheritance without an expensive constructor 

// method using Object.create

Function.prototype.inherits2 = function(ParentClass) {
    this.prototype = Object.create(ParentClass.prototype);
    this.prototype.constructor = this;
}

// Does the same thing as surrogate, by creating dummy object that has name 
// prototype, but is its own object. Same benifits with the surrogate, not 
// as expensive

function MovingObject(part) {
    this.part = part
 }
MovingObject.prototype.fly= function() {
    console.log(this.part + " flies")
}

function Ship(part) {
    MovingObject.call(this, part)
 }
Ship.inherits(MovingObject);

function Asteroid(part) { 
    MovingObject.call(this, part)
}
Asteroid.inherits2(MovingObject);