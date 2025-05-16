//Curly braces are scopes.But when declared with object they are not scope they are object declaration but when with function they are called scope

var c = 300
let a = 500
if(true){
    let a = 10
    const b = 20
    var c = 30
    console.log("Inner" ,a) //Prints 10

}
console.log(a);// Values cannot be displayed out of scope // Prints 500
//console.log(b);//Values in constant cannot be displayed out of scope
console.log(c); //Values in variable can be displayed outside . VAr taked value in the block scope

// { } - Block scope and outside of that is global Scope.In case of block scope it overrides it
// The global scope in windows console and in block scope are different totally


