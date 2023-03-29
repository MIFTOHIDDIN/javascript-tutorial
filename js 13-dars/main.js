// Old var,IIFE(immiedietly invoked function expression)
// let,var,const

// Global objects-Window,global,this,globalThis
// window -> DOM
// global -> node js 
// this,globalThis - pure js
// 

// new Function

// let sum = new Function (`console.log("hey")`)
// sum()

// setTimeout,setInterval

// setTimeout((a)=>{
//     console.log(2,a);
// },3000,"hey")
// // clearTimeout()


// let res = setInterval(()=>{
//     console.log(`${new Date().getSeconds()}`);
//     if(new Date().getSeconds() == 50){
//         clearInterval(res)
//     }
// },1000)

// apply,call,bind ->this kontekstiga ozgaruvchi biriktiradi
// let usr = {
//     name: "eshmat",
//     surname: "toshmat",

// }
// let usr1 = {
//     name: "eshmat",
//     surname: "toshmat",

// }
// let usr2 = {
//     name: "eshmat",
//     surname: "toshmat",

// }

// function getData(prop){
//     console.log(this.name, this.surname,prop);
// }
// let b = getData.bind(usr2,"hey")
// b()
// getData.apply(usr2,["hey"])
// getData.call(usr2,"hey")


// Prototype,__proto__
// let ar = [1, 23, 3, 3, 234, 1, 5, 6]
// Array.prototype.remove = function (prop) {
//     return this.filter(val => val !== prop)
// }
// console.log(ar.remove(23));

// let obj = {
//     name:"eshmat"
// }
// let obj2 = {
//     surname:"toshmat"
// }
// obj.__proto__ =obj2
// console.log(obj.surname);