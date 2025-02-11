//2. Use the typeof operator to find the types of different variables. Specially note what the
//   typeof operator returns for arrays, null values and NaN. How can you find if a variable is
//   an array or NaN besides typeof?


let a=5
console.log("type of a is :",typeof a)

let b='j'
console.log("type of b is :",typeof b)

let arr=[1,2,3,4,5,6]
console.log("type of arr is :",typeof arr)

let c='josh'
console.log("type of c is :",typeof c)



let obj={
    key:"value",
    3:"value2",
    "key1":"value3",
    4:889
}
console.log("type of obj is :",typeof obj)


let d=null
console.log("type of d is : ",typeof d)

let e=NaN
console.log("type of e is : ",typeof e)



// the output of the above code is as following :-
// ans2.js
// type of a is : number
// type of b is : string
// type of arr is : object
// type of c is : string
// type of obj is : object
// type of d is :  object
// type of e is :  number

//  How can you find if a variable is an array or NaN besides typeof? 
console.log(Array.isArray(arr));  //true
console.log(isNaN(e));  // true