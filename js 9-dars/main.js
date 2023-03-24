// ====================


// function check(str1, str2) {

//       if (str1.localeCompare(str2) === 0) {
//         return "toliq";

//       }else if (str1.localeCompare(str2) === 1) {
//         return "qisman mos";
//       } else {
//         return "umumman mos kelmaydi";
//       }

//   }
//   console.log(check("webbrain academy", "acsa"));
//   ===================





// =====================

// function getCount(str) {
//     let obj = {}

//     for (let i = 0; i < str.length; i++) {
//         const char = str[i]

//         obj[char] = (obj[char] || 0) + 1
//     }

//     return obj

// }

// console.log(getCount("webbrain"));
// =======================


// ========================
// function truncate(str,n){
//     let res = str.slice(0,n)
//     console.log(res);
// }
// truncate("webbrain academy",5)
// ==========================



// ========================
// function getCurrency(str) {
//     let raqam = ""
//     for (let i = 0; i < str.length; i++) {
//         const digit = str.charAt(i)
//         if (digit >= 0 && digit <= 9){
//             raqam+=digit
//         }
//     }
//     return raqam
// }
// console.log(getCurrency("$1234"));
// =========================



// =========================

// function capitalize(str) {
//     let words = str.split(' ')
//     for (let i = 0; i < words.length; i++) {
//         let word = words[i];
//         words[i] = word.charAt(0).toUpperCase() + word.slice(1);
//     }
//     return words.join(' ')
// }
// console.log(capitalize("webbrain academy"));

// =========================


// ========================

// console.log(eval([1,2,3,4].join("+")));
// =========================

// ====================

// Advanced Array

// let ar = [11, 120, 12, 4, 3, 2, 0, 9, 5]
// let str = ["apple", "Kiwi", "banan", "orange"]
// console.log(ar.sort((a, b) => { 
//     return a - b 
// }));
// console.log(str.sort((a, b) =>{
//     return a.localeCompare(b)
// } ));

// let resFilter = ar.filter((value, index) => {

//     return value === 120
// })
// let resFind = ar.find((value, index) => {

//     return value === 120
// })
// let res = ar.findLastIndex((value,index)=>{
//     return value === 1200
// })

// let resEvery = ar.every((value)=>value<100)
// let resSome = ar.some((value)=>value<100)

// console.log(ar.fill("*", 3, 5));
// console.log(ar.copyWithin(0, 3, 5));
// let fora = ar.forEach((value, index) => {
//     value
// })
// let res = ar.map((value, index) => {
//     return value
// })
// console.log(fora);
// console.log(res);

// let ar = [1,2,3]
// console.log(ar.flat(2));
// console.log(ar.flatMap((value)=>1));
// let rr = Array.from(["webbrain"],(value)=>value.toUpperCase())
// console.log(rr);
// let sum = ar.reduce((prev, value) => {

//     return prev + value
// }, 0)
// console.log(sum);


let users = [
    { id: 1, year: 1998, engine: 1, name: "Tico" },
    { id: 2, year: 2005, engine: 1.2, name: "Matiz" },
    { id: 3, year: 2010, engine: 1.6, name: "Gentra" },
    { id: 4, year: 2010, engine: 1.5, name: "Cobalt" },
    { id: 5, year: 2012, engine: 2, name: "Malibu" },
    { id: 6, year: 2000, engine: 1.2, name: "Damas" },
    { id: 7, year: 2018, engine: 2.4, name: "Tracker" }
]

// 2000 yildan oldinga mashinalar ro'yhatini chiqaring
// console.log(users.filter((value,index)=>value.year<2000)); 

// //   2010 yildan keyingi chiqgan mashinalar ro'yhatini chiqaring
// console.log(users.filter((value,index)=>value.year>2010)); 

// engine kuchiga qarab malumotlarni sartiforfka qiling
// console.log(users.sort((a,b)=>a.engine-b.engine));

// // chiqarilgan yiliga qarab malumotlarni sartiforfka qiling
// console.log(users.sort((a,b)=>a.year-b.year));

//  isimlarini Alphabet tarzda sartiforfka qiling
// console.log(users.sort((a,b)=>a.name.localeCompare(b.name)));

// // 2000 yildan oldin chiqgan mashinalarga status: eski malumot qo' shing

let res = users.map((value) => {
    if(value.year<2000){
       return {...value,malumot:"eski"}
    }else if(value.year>=2000 && value.year <=2010){
        return {...value,malumot:"o'rta"}
    }
    else if(value.year>2010){
        return {...value,malumot:"yangi"}
    }
    else{
        return value
    }
    
}
    )
    console.log(res);





// // 2000~2010 yilda chiqgan mashinalarga status: o'rta malumot qo'shing

// // 2010~2022 yildan oldin chiqgan mashinalarga status: yangi malumot qo'shing