// question 2 using return statement in test function before callback();

function test(callback){
    return callback();
}

function add(){
    console.log("calling the callback function")
    return 5;
}

console.log("only add")
let r1=test(add)
console.log(r1)
// console.log("only add()")
// test(add())  // it gives error because here add() return 5 before calling test 
// and then test(5) is called but here 5 is not a function so it gives typeError.

console.log("only ()=>add()")
let r2=test(()=>add())
console.log(r2)
