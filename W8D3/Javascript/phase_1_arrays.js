Array.prototype.uniq = function() {
    let new_array = [];
    for (let i = 0; i < this.length; i++) {
        if (!new_array.includes(this[i])) {
            new_array.push(this[i]);
        }
    }
    return new_array;
};

// console.log([1,2,3,4].uniq


Array.prototype.twoSum = function() {
    let pairs = [];
    for (let i = 0; i < this.length - 1; i++) {
        for (let j = i + 1; j < this.length; j++) {
            if (this[i] + this[j] === 0) {
                pairs.push([i,j]);
            }
        }
    }
    return pairs;
};

Array.prototype.transpose = function() {

    
    let transposed = new Array(this[0].length).fill(null)
        .map(()=>new Array(this.length).fill(null));


    for (let i = 0; i < this.length; i++) {
        for (let j = 0; j < this[0].length; j++) {
            transposed[j][i] = this[i][j];
        }
    }
    return transposed;
};
// [[0, 1], [1, 2], [3, 4]].transpose();
