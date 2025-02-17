const func = async ()=>{
    console.log("Printing before")
    await new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("after waiting for 5 seconds")
            resolve()
        },5000)
    })
    console.log("printing after")
}

func();