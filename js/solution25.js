// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));

function num(otherNum, x){return x ? x(otherNum) : otherNum;}
function zero(x) { return num(0,x)}
function one(x) { return num(1,x)}
function two(x) { return num(2,x)}
function three(x) { return num(3,x)}
function four(x) { return num(4,x)}
function five(x) { return num(5,x)}
function six(x) { return num(6,x)}
function seven(x) { return num(7,x)}
function eight(x) { return num(8,x)}
function nine(x) { return num(9,x)}

function plus(b) {return function(a){ return a + b;};}
function minus(b) {return function(a){ return a - b;};}
function times(b) {return function(a){ return a * b;};}
function dividedBy(b) {return function(a){ return Math.floor(a / b);};}