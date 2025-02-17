// answer using promise.
const promise1=fetch("https://reqres.in/api/users")

promise1.then((data)=>{
    console.log(data)
}).catch((error)=>{
    console.error("error occured",error)
})

//answer using async await function.
async function fetchData(){
    try{
        const data= await fetch("https://reqres.in/api/users")
        console.log(data)
    }catch(error){
        console.error("error occured : ",error.message)
    }
    
}

fetchData();