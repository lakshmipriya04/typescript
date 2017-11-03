let myName: string;
let myNum: number;
let myBool: boolean;
let myVar: any;
let myVoid: void;
let myNull: null;
let myUndefined: undefined;

/*
let strArr: string[];
let numArr: number[];
let boolArr: boolean[];
*/

let strArr: Array<string>;
let numArr: Array<number>;
let boolArr: Array<boolean>;

let myTuple: [string, number, boolean];

myName = "lakshmi"+"priya";
myNum = 44;
myBool = false;
myVar = "hey"+4+true;

strArr = ['hey','hi','hello'];
numArr = [11,22,33,44];
boolArr = [true,false,false];

myTuple = ["hey", 44, true, false, "hello", 55];

myVoid = void(0); 
myNull = null; 
myUndefined = undefined; 

console.log(myName);
console.log(myNum);
console.log(myBool);
console.log(myVar);
console.log(strArr);
console.log(numArr);
console.log(boolArr);
console.log(myTuple);
console.log(myVoid);
console.log(myNull);
console.log(myUndefined);