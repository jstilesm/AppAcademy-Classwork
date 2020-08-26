Array.prototype.bubbleSort = function() {
  let isSorted = false;

  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] > this[i+1]) {
        [this[i], this[i+1]] = [this[i+1], this[i]];
        isSorted = false;
      }
    }
  }

  return this;
};

String.prototype.substrings = function() {
    let substrings = [];
    for (let i = 0; i < this.length - 1; i++) {
        for (let j = i + 1; j < this.length; j++) {
            substrings.push(this.slice(i, j))
        }
    }
    return substrings;
};

// .filter(word => word != '')