let score = undefined

// console.log(typeof score)

let valueInNumber = Number(score)

// console.log(typeof valueInNumber)
// console.log(valueInNumber)

// When trying to convert following into Number datatype we get respective values
// "33" => 33
// "33abc" => NaN
// true => 1
// false => 0
// null => 0
// undefined => NaN

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(booleanIsLoggedIn)

isLoggedIn = 0
booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(booleanIsLoggedIn)

isLoggedIn = ""
booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(booleanIsLoggedIn)

isLoggedIn = "solomon"
booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(booleanIsLoggedIn)

isLoggedIn = 234
booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(booleanIsLoggedIn)

// When trying to convert following into Boolen datatype we get respective values
// 1 => true; 0 => false
// "" => false
// "solomon" => true