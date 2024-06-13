const f01 = addNumbers(3,5)
console.log(f01);
function addNumbers(num1,num2) {
    return num1+num2;
}
//Logic 1 end

const multiplyNumbers = (num1,num2)=>{
return num1*num2
}
const f02 = multiplyNumbers(8,2);
console.log(f02);
//Logic 2 end

function f3(num1,num2) {
    var sum 
    console.log(sum);
    return sum =  num1 * num2
}
f3(4,5);
//Logic 3 end
console.log(`Var:${a},let:${a},Const:${a}`);
var a = "var";
let b = "let";
const c = "const";
console.log(`Var:${a},let:${b},Const:${c}`);
//Logic 4 end
// console.log(logicNumber); trowing an error
function f05(){
    console.log(logicNumber);
    var logicNumber = 5;
}
f05();
//05 Logic end
console.log("than you for coding");