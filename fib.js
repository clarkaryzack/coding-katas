function fib() {
  let a = 0
  let b = 1
  let sum = 0
  while (a < 4000000) {
    if (b % 2 === 0) {
      sum = sum + b
    }
   a = a + b
   b = a
  }
  return sum
}

console.log(fib())
