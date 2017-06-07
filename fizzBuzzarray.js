function fizzBuzz() {
	var arr = [];
  x = 0;
	for (let x = 1; x < 100; x++) {
    x = x + 1
    if (x % 3 === 0 && x % 5 === 0) {
      arr.push("FizzBuzz")
    } else if ( x % 3 === 0 ) {
        arr.push( "Fizz" )
      } else if ( x % 5 === 0 ) {
          arr.push( "Buzz" )
        } else arr.push( x )
  }
	return arr
}

console.log(fizzBuzz())
