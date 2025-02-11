// what is the difference between ++i and i++ ?

console.log("log i using i++")
for (let i=0; i<5; i++){
    console.log(i++)
}
// i++ , it first prints the value of i and then increment it by 1;

console.log("log i using ++i")
for (let i=0; i<5; i++){
    console.log(++i)
}
// ++i , it first increment and then print the value of i;