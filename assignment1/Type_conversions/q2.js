let age=25

switch(age){
    case (age<=12):{
        console.log("child")
        break;
    }
    case (age>=13 && age<=18):{
        console.log("teen")
        break;
    }
    case (age>18):{
        console.log("adult")
        break;
    }
    default :{
        console.log("invalid age!")
        break;
    }

}