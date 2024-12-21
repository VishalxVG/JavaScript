/* NOTE

On the basis of how the data is stored in memory , datatype are divided into two type

Primitive(Copy of the value) and Non Primitive(Original value)

*/

const id = Symbol('123')
const aontherId = Symbol('123')

console.log(id === aontherId) // Output = False => Symbol makes the variable unique even if they have same value , they have diff return type

console.log(typeof id) // Output : Symbol

// PRIMITIVE : Call by Value

// 7 Types : String , Numeber(Integet and Float both) , Boolean , null , undefined , Symbol BigInt


// NON PRIMITIVE : Reference Type

// Array , Objects(Dictionary) , Functions 
// The return type of every function is: OBJECT 

const heros = ["hello" , "world"] // Array

let myObj = { // Object 
    name:'Vishal' ,
    age : 22
}

const myFun = function(){
    console.log("hello World")
}
// myFun()

console.log(typeof myFun) // Output : function (but it is obejct function)

console.log(typeof heros) // Output : Object 
 




// Stack(Primitive) || Heap ( Non primitive) 

let myYoutubeName = "abc"
let anotherName = myYoutubeName 
anotherName = "xyz"

// Both values are stored in stack and there a copy is saved 
 
console.log(myYoutubeName); // Output : abc
console.log(anotherName); // Output : xyz


let user = {
    name : "Vishal"
}

let user2 = user

user2.name = "Abc"

console.log(user.name) // Output : Abc
console.log(user2.name) // Output : Abc

// A reference is used , so the original value is also changed







