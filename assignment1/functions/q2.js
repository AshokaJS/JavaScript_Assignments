function test(callback){
    callback();
}

function add(){
    console.log("calling the callback function")
    return 5;
}

console.log("only add")
test(add)
console.log("only add()")
test(add())  // it gives error because here add() return 5 before calling test 
// and then test(5) is called but here 5 is not a function so it gives typeError.

console.log("only ()=>add()")
test(()=>add())
