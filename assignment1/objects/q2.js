// Write a function filterObj that will filter out all the keys of a flat object that have
// objects or arrays using Object.keys and Object.entries. Example:

let obj = {
    a: "Apple",
    b: ["Basketball", "Baseball"],
    c: {
        call: "cellphone"

    },
    d: "Dog"
}

let result =[]
function filterObject(){
    
    let obj1=Object.entries(obj)

    for(const element of obj1){
        if(typeof element[1]!="object"){
            result.push(element)
        }
    }
}
filterObject();

console.log(Object.fromEntries(result));
