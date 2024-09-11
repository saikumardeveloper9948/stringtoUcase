// tasks:
// ------
// 1.Uppercase first letter

// - Input: "hello"
// - Output: "Hello"

// - Input: "world"
// - Output: "World"
// hint:charAt(), toUpperCase(), slice(), concat()


let x="hello".charAt(0)
let a="hello".slice(1)
let b=x.toUpperCase()
console.log(b+a)



// 2.Remove vowels

// - Input: "hello"
// - Output: "hll"

// - Input: "world"
// - Output: "wrld"

// using replace().

let d= "hello"
let e = d.replace(/[aeiou]/g,"")
console.log(e)
