function threeFive(end) {
  var x = 1
  var sum = 0
  while (x<end) {
    if (x%3===0 || x%5===0) {
      sum += x;
    }
    x++;
  }
  return sum
}

console.log(threeFive(1000))
