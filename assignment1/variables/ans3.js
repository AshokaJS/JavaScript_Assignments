// Use let and const to create arrays and objects. Try modifying, deleting properties within
// the array or object. What do you expect to happen in both cases?
// What actually happens in both cases. What is the difference between an object declared 
// as a let or a const variable?

let arr=[1,2,3,4]

arr[2]=22
arr[0]=10
console.log(arr)

arr=["a","s","h","o"]
console.log(arr)
// As we see above we can change the elements of the arr and also we can reassign new array to arr in case of let it is possible but using const reassignment is not possible.
// using const

const a=[1,2,3,4,5]
a[0]=10                    // when we define array a using const then we can change the element of array but we can't reassign new array to a.
a[3]=33
console.log(a)

// a=["a","b","c"]      // assignment to const variable is not possible 
console.log(a)
