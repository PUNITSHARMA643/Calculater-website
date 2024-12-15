/*
console.log("hello wolrd");
console.log("my name i punit sharma");
//alert("hello world");
fillName = "punit";
console.log(fillName);

//var : variable can be ri-declared & updated. A global scope variable

//let: variable cannot be re-declared can be updated. a block scope variable
//const: variable cannot be re-declared or updated. a block scope variable

let age = 65;
console.log(age);

let a=5;
console.log(a);


const student={
    fullName : "rahul kumar",
    age : 20,
    cgpa : 8.2,
    isPass : true
};

console.log(student["fullName"]);
console.log(student.cgpa)


let arr = [1,2,3,4,5,6,7];

arr.filter(val => 12)
*/


function appendToResult(value) {
    

    if (value === 'C') {
        document.getElementById("inputBox").value = "";
      } else
      if(value ==='='){
        const result = eval(document.getElementById("inputBox").value);
    document.getElementById("inputBox").value = result;
      }
       else {
        document.getElementById("inputBox").value += value;
      }
  }
  
  /*
  function calculate() {
    const result = eval(document.getElementById("inputBox").value);
    document.getElementById("inputBox").value = inputBox;
  }
  
  function clearResult() {
    document.getElementById("inputBox").value = "";
  }
    */

////////////////////////////////////////

/*
  function calculate() {
    const inputBox = document.getElementById("inputBox");
    const expression = inputBox.value;
    const result = eval(expression);
    
    // Display the result in a separate element (e.g., a paragraph)
    const resultDisplay = document.getElementById("resultDisplay");
    resultDisplay.textContent = "Result: " + result;
  
    // Or, clear the input field after displaying the result:
    // inputBox.value = "";
  }

  */
