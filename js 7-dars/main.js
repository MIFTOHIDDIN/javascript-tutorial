// Number
// let a = "1"

// console.log(Number(a.toFixed(2)));
// console.log(Number(a.toPrecision(2)));

// console.log(Number(a));
// console.log(parseInt(a));
// console.log(parseFloat(a));

// let num ="0.1 + 0.2"
// console.log(num);\

// let res = Object.is("web","webb")
// console.log(res);

// console.log(Math.abs(-10));

// console.log(Math.ceil(2.1));
// console.log(Math.floor(2.9));
// console.log(Math.round(-2.4));
// console.log(Math.trunc(-5.8));
// console.log(Math.sqrt(9));
// console.log(Math.cbrt(27));
// console.log(Math.pow(5,3));
// console.log(5**3);
// console.log(Math.min(1,2,55,334,21));
// console.log(Math.max(1,2,55,334,21));
// console.log(Math.sign(-0));
// let a=9007199254740992n
// console.log(a+1n);

// let a = 1_000_000_000
// console.log(1e10);

// let a = 3
// 0001=1
// 0010=2
// 0011=3
// 0101=4
// =======
console.log(Math.max(1,23,56,23)-Math.min(11,234,45,23,12));

// =========
function random(min,max){
return Math.floor(Math.random()*(max-min)+min)
}
console.log(random(1,50));
// ========

function binary(num) {
    let b = num.toString(2)
    let nol = 0
    let bir = 0
    for (let i = 0; i <= b.length; i++) {
        if (b.charAt(i) === "1") {
            bir++
        }else if(b.charAt(i)==="0"){
            nol++
        }
       
    }

    console.log(`${num} ni binarysi ${b}`);
    console.log(`${bir} ta- 1 raqami bor`);
    console.log(`${nol} ta- 0 raqami bor`);
}
binary(50)

