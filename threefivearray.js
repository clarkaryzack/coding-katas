function threeFive(end) {
	let arr = [];
  var sum = 0
	for (let x = 1; x < end; x++)
    if (x%3===0) {
    	arr.push(x);
    } else if (x%5===0) {
        arr.push(x);
      }
  return arr
}

var sumThreeFive = threeFive(1000).reduce((a,b) => a + b, 0 );

console.log(sumThreeFive);
