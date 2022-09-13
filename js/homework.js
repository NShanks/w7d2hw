//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/
let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}
for(let i = 0; i<Object.keys(person3).length; i++){ // 5 loops bc theres 5 keys in the person3 dict
    console.log(Object.keys(person3)[i])
    console.log(Object.values(person3)[i])
}




//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
class Person{
    constructor(name, age){
        this.age = age;
        this.name = name;
    }

    // printInfo() {
    //     return `Name: ${this.name} \n Age: ${this.age}`
    // }
    // Use an arrow to create the printInfo method
    printInfo = () => {return `Name: ${this.name} \n Age: ${this.age}`}

    // ageUp() {
    //     this.age++
    // }
    // Create another arrow function for the addAge method that takes a single parameter
    ageUp = (yearsGoneBy) => this.age += yearsGoneBy
}

let daemon = new Person('Daemon', 35)
let rhaenyra = new Person('Rhaenyra', 20)
let viserys = new Person('Viserys', 49)

console.log(daemon.printInfo())
console.log(rhaenyra.printInfo())
console.log(viserys.printInfo())
console.log("One episode goes by...")
// Adding to the age
viserys.ageUp(3)
console.log(viserys.printInfo())


// =============Exercise #3 ============//
/*
    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/



const moreThanTen = (num) => {
    return new Promise( (resolve,reject) => {
        if(num > 10){
            resolve(true)
        } else {
            reject(false)
        }
    })
}

// Using a JS Promise
moreThanTen(5)
// moreThanTen(11)
//Happy resolver path
.then( (result) => {
    console.log(`Is the number larger than 10?: ${result}`)
})
//Sad Reject path
.catch( (error) => {
    console.log(`Is the number smaller than 10?: ${error}`)
})




// https://www.codewars.com/kata/50654ddff44f800200000004/train/javascript
function multiply(a, b){
    return a * b
}


// https://www.codewars.com/kata/5168bb5dfe9a00b126000018/solutions/javascript?filter=me&sort=best_practice&invalids=false
function solution(str){
    let splitStr = str.split("");
    let reverseArray = splitStr.reverse();
    let joinArray = reverseArray.join("");
    return joinArray;
  }