Array.prototype.myEach = function(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};

Array.prototype.myMap = function(callback) {
  let mapped = [];
  this.myEach(i => mapped.push(callback(i)))

  return mapped;
};

Array.prototype.myReduce = function(callback, initialValue) {
  let accum
  if (initialValue) {  
    accum = initialValue;
    this.myEach(i => accum = callback(accum, i));
  } else {
    accum = this[0];
    this.slice(1).myEach(i => accum = callback(accum, i));
  }
  return accum;
};