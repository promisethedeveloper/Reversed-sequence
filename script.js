// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

const reverseSeq = n => {
   let outputArray = [];
    while (n > 0) {
    outputArray.push(n);
    n--;
  }
  return outputArray;
};

console.log(reverseSeq(6));