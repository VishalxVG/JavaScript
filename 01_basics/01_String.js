const name = "vishal"
const repoCount = 50

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

// `` != ''

String
console.log(name[0])


const gameNumber = new String('vishal')


console.log(typeof name) // Output : String
console.log(typeof gameNumber)  // Output : Object => since defined with "new"


console.log(gameNumber[5])
console.log(gameNumber.__proto__) // Output : {} => Object

console.log(gameNumber.toUpperCase) // Output : [Function: toUpperCase]
console.log(gameNumber.toUpperCase()) // Output : VISHAL