function Cat(owner, name, age, color) {
    this.owner = owner;
    this.name = name;
    this.age = age;
    this.color = color;
};

Cat.prototype.cuteStatement = function() {
    console.log(`${this.owner} loves ${this.name}`);
};
 
Cat.prototype.cuteStatement = function() {
  console.log(`Everyone loves ${this.owner}`);
};

Cat.prototype.meow = function() {
    console.log(`${this.name} meows`)
};

let arash = new Cat('no_one', "arash", '57', 'green')

let eugene = new Cat('nick', 'eugene', '2','brown');
eugene.cuteStatement();
arash.cuteStatement();

eugene.meow = function() {
    console.log(`Serve me you stupid humans`)
};
arash.meow();
eugene.meow();



