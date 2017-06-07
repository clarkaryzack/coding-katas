function threeFive() {
  var x = 1
  var sum = 0
  while (x<1000) {
    if (x%3===0) {
      sum += x;
      x++;
    }
		 if (x%5===0) {
        sum += x
      } x++
  }
  return sum
}

console.log(threeFive())
