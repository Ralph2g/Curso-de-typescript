console.log("hello-World");
//types
var myString = "Hello World";
myString = 22 + "";
var myNumber = 22;
var myBoll = true;
var myVar = "hello";
myVar = false;
document.write(myString);
var StringArray = ["2", "item1", "item 2"];
var StringNumber = [1, 3, 4];
StringArray = [1, 3, 4];
//tuple
var strNumTuple;
strNumTuple = ["hello", 22];
function getSum(num1, num2) {
    return num1 + num2;
}
var suma = function (num1, num2) {
    if (typeof (num1) === 'string') {
        num1 = parseInt(num1);
    }
    if (typeof (num2) === 'string') {
        num2 = parseInt(num2);
    }
    return num1 + num2;
};
function showTodo(todo) {
    console.log(" $(todo.titulo) - $(todo.text)");
}
var myTodo = {
    titulo: "eat-dinner",
    nombre: "Estebam"
};
showTodo(myTodo);
