//const obj1 = new Object() ; // This is a Singleton object
//Non-Singleton Object

const obj1 = {}
obj1.id = "1515";
obj1.name = "Archer";
obj1.isLoggedIn = false

console.log(obj1);

const obj2 = {
    email : "abc@gmail.com",
    fullname : {
        userfullname : {
            firstname : "Archer" ,
            lastname : "Knight"
        }
    }
}

console.log(obj2.fullname.userfullname.firstname)

//what if fullname doesnt exist and we want API response

console.log(obj2.fullname?.userfullname.firstname)

//Concatenating Objects
const obj3 = {1: "A" , 2: "B"}
const obj4 = {3: "C",4: "D"}
const objnew ={obj3 , obj4}
console.log(objnew)

