function main(){
    for(let i=0; i<5; i++){
        if(i==3){
            break;
        }
    }
    console.log("after break statement function continues")
}

function main1(){
    for(let i=0; i<5; i++){
        if(i==3){
            return "exited from function"
        }
    }
    console.log("this will never printed after return statement executed.")
}

main()
let st=main1();
console.log(st)