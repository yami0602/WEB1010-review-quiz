// Question 9

// Build a function declaration called maxOf2 that takes in two numbers and
// returns the greater value, or returns the first value if both of them
// are equal.
// Then test your function inside of a console.log by calling it with two
// different numbers and again in another console.log with two equal numbers.

function maxof2(a, b){
    if (a >= b) {
        return a
} else {
    return b
}

}
 console.log(maxof2(6, 8));
