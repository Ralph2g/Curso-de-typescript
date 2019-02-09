console.log("hello-World");


//types
var myString: string = "Hello World"

myString = 22 + "";

var myNumber:number = 22;
var myBoll: boolean =true;

var myVar:any = "hello";
myVar = false;

document.write(myString)

var StringArray:any[] =[ "2","item1","item 2"];
var StringNumber:number[] = [1,3,4];

StringArray =[1,3,4];

//tuple
var strNumTuple:[string,number];
strNumTuple = ["hello",22];

function getSum(num1:number,num2:number):number{
    return num1 + num2;
}


let suma = function (
    num1:number | string,
    num2:number | string):number{
        
        if( typeof(num1) === 'string'){
            num1 = parseInt(num1);
        }
        if (typeof(num2) === 'string'){
            num2 = parseInt(num2);
        }
        return num1 + num2;
    }
interface Itodo {
    titulo:string;
    nombre:string;
}

function showTodo (todo:Itodo){
    console.log(` $(todo.titulo) - $(todo.text)`);
}
let myTodo:Itodo ={
    titulo:"eat-dinner",
    nombre:"Estebam"

}
showTodo(myTodo);