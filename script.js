let x1 = 2
let y1 = '2'
let ress = x1<=y1
console.log(ress);

let text1 = 20
x2 = "20" 
y2 = "5"
let ress1 = x2>y2
let ress2 = x2=y2
let ress3 = x2>=y2
let ress4 = x2<y2
let ress5 = x2<=y2
let ress6 = x2==y2
let ress7 = x2===y2

Message1 =`
${ress1}
${ress2}
${ress3}
${ress4}
${ress5}
${ress6}
${ress7}
`
console.log(Message1);

let x3 = 5+5;
let y3 = "5"+5;
let z3 = "Hello" + 5;
console.log(x3);
console.log(y3);
console.log(z3)

let a1 = 2
let b1 = 3
let resss = a1!=b1
Message2 = `
${a1} is not equal to ${b1} : ${resss}
`
console.log(Message2);

let a2 = 4
let b2 = 3
let c2 = 6
let d2 = 5
let res8 = (a2>b2)&&(c2>d2);
console.log(res8)
let res9 = (a2<b2)&&(c2>d2);
console.log(res9)
let res10 = (a2<b2)&&(c2<d2);
console.log(res10)

let name = "Ahsan"
let nickname = new String('Ahsan')
console.log(name,'name is a String :', nickname instanceof String);
console.log(name,'name is a Number :', nickname instanceof Number);

// x:int;
// let x = 2
// (isinstance(x,int));
// console.log(x);

console.log('CONDITIONAL OPERATORS')

// let age = parseInt(prompt('Please enter your age'))
// age = Math.abs(age)

// if(age>=18) {
//     console.log('You are eligible for Vote');
// }
// else {
//     console.log('You are not elgible for Vote');
// }
// let res11 = age>=18?'You are eligible for vote': 'You are not eligible for vote';
// console.log(res11);


console.log('Nested If Else');
let x4=10
let x5=5
let x6=30
let x7=60

if(x4>x5) {
    if(x4>x6) {
        if(x4>x7) {
            console.log(x4,'is greater than all numbers')
        }
        else {
            console.log(x4,'is greater than',x5,x6,'and less than',x7)
        }
    }else{
        console.log(x4,'is greater than',x5,'and less than',x6,'and',x7)
    }
}
else{
    console.log(x4,'is less than numbers',x5,',',x6,'and',x7)
}
