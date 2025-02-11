let age=25;
if((typeof age)==number &&  age>0){
    if (age<=12){
        console.log("child")
    }
    else if(age>=13 && age<=18){
        console.log("teen")
    }
    else{
        console.log("adult")
    }
}
else{
    console.log("invalid age")
}