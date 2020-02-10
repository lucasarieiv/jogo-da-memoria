const email = "lucas.vieira.da.silva@gmail.com"

let myRe = new RegExp(/^\w*(\.\w*)*@[A-z]*\.[a-z]+(\.[a-z]+)?$/);

let myArray = myRe.exec(email);

console.log(myArray != null)



