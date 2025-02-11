//Can you use return instead of break in loops?

// yes we can use return instead of break in some cases when we want to exit from the function completely,
// in case of break we exit from the loop not from the function.

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
            return
        }
    }
    console.log("this will never printed after return statement executed.")
}

main();
main1();