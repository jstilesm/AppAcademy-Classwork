function range(start, end) {
  let value = [start];
  if (start === end) {
    return [end];
  };
  return value.concat(range(start + 1, end));
};

function sumRec(arr) {
  let sum = 0;
  if (arr.length === 1) {
      return arr[0]
  } 
  return sum + arr.shift() + sumRec(arr);
};

function exponent(base, exp) {
  if (exp === 0) {
    return 1;
  }
  return base * exponent(base, exp - 1);
};

function exponent(base, exp) {
    if (exp === 0) {
        return 1;
    } else if (exp == 1) {
        return base;
    }
    if (exp % 2 === 0) {
        return exponent(base, exp / 2) ** 2;
    } else {
        return base * (exponent(base, (exp - 1) / 2) ** 2);
    }
}

function fibonacci(n) {
  if (n === 1) {
    return [0];
  }
  if (n === 2) {
    return [0, 1];
  }
//   debugger;
  let fibArr = fibonacci(n - 1);
  fibArr.push(fibArr[n - 2] + fibArr[n - 3]);
  return fibArr;
}

function deepDup(arr) {
  if (!(arr instanceof Array)) {
    return arr
  }
  let clone = [];
  arr.map(el => clone.push(deepDup(el)));
  return clone;
}

// [1,[2,3],4,5,[[6,[7]]]]
// clone = [1]
// [2, 3]

function bsearch(arr, target) {
  let half = Math.floor(arr.length / 2);
  if ((arr.length === 1) && (arr[half] != target)) {
  return -1;
  }
  if (arr[half] === target) {
      return half;
  } else if (arr[half] > target) {
  return bsearch(arr.slice(0,half),target);
  } else {
    let upperSearch = bsearch(arr.slice(half), target);
    if (upperSearch === null) {
      return -1;
    } else {
      return 1 + half + upperSearch;
    }
   }
}



[1,2,3,4,4,5,7]