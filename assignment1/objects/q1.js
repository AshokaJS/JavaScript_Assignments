// How will you create a new copy of the object below while updating the value of
// address.details[0] to “5“?


let obj = {
    name: "Harry Potter",
    age: 12,
    address: {
        details: ["4", "Privet Drive"],
        area: "Little Whinging",
        city: "Surrey",
        state: "England"
    }
}

let obj1={...obj}

obj1.address.details[0]=5

console.log(obj)
console.log("The modified code")
console.log(obj1)