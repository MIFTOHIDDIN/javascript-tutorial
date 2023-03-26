// C - create
// use spread operator(...),distructe

// R - Read
// filter,sort,includes,find

// U - update
// filter,find

// D - delete
// filter,splice

// let users = [
//     { id: 1, year: 1998, engine: 1, name: "Tico" },
//     { id: 2, year: 2005, engine: 1.2, name: "Matiz" },
//     { id: 3, year: 2010, engine: 1.6, name: "Gentra" },
//     { id: 4, year: 2010, engine: 1.5, name: "Cobalt" },
//     { id: 5, year: 2012, engine: 2, name: "Malibu" },
//     { id: 6, year: 2000, engine: 1.2, name: "Damas" },
//     { id: 7, year: 2018, engine: 2.4, name: "Tracker" }
// ]

// const read = () => {
//     console.log(users);
// }
// const sortByName = () => {
//     let res = users.sort((a, b) => a.name.localeCompare(b.name))
//     console.log(res);
// }
// const sortByYear = () => {
//     let res = users.sort((a, b) => a.year - b.year)
//     console.log(res);
// }
// const sortByLetter = (letter) => {
//     let res = users.filter((value) => value.name.toLowerCase().includes(letter))
//     console.log(res);
// }
// const del = (id) => {
//     let res = users.filter((value) => value.id !== id)
//     console.log(res);
// }

// const create = (data) => {
//     let usr = [...users, { id: users.length + 1, name: names.value, year: year.value }]
//     console.log(usr);
// }
// const update = (id) => {
//     let res = users.map((value) => value.id === id ? {...value,name:"zaparoj"} : value)
//     console.log(res);
// }




// 1)
// let katta = 0
// let kichik = 0
// let str = "WebBr@in Ac@demy"
// for (let i = 0; i < str.length; i++) {
//     if (str[i] === "W"||str[i] === "A") {
//         katta ++

//     } else {
//        kichik++
//     }

// }
// console.log(`${katta} ta katta harf,${kichik} ta kichik harf bor`);


// 2)

// let newa = ""
// let str = "WebBr@in Ac@demy"
// for (let i = 0; i < str.length; i++) {
//     if (str[i] === "@") {
//         newa += "a"
//     } else {
//         newa += str[i]
//     }

// }
// console.log(newa.toLowerCase());

// 3)
// let str = "webbbraiiin accaddemmy"

// let newStr = "";

// for (let i = 0; i < str.length; i++) {


// }
// console.log(newStr);

// 4)
// let str = "We66ra1n Acad4my"
// let res = ""
// for (let i = 0; i < str.length; i++) {
//     if(str[i]==="6"){
//         res+="b"
//     }else if(str[i]==="1"){
//         res+="i"
//     }else if(str[i]==="4"){
//         res+="e"
//     }else{
//         res+=str[i]
//     }


// }
// console.log(res);


// 5)
// let str = "Webbrain"
// let res = ""
// for (let i = 0; i < str.length; i++) {
//     res += str[i].repeat(2)

// }
// console.log(res);

// 6)
// let str = "non"
// const res = str.split("").reverse().join('')
// if (res === str) {
//     console.log("palindrom");
// } else {
//     console.log("palindrommas");
// }

// 2)obj
// let obj = {
//     title:
//         "Webbrain",
//     age: 2,
//     child: {
//         age: 4,
//         name:
//             "Webbrain",
//         child: {
//             age: 3,
//         }

//     },
// }
// console.log(obj.age+obj.child.age+obj.child.child.age);

// 3)
// let obj = {
//     id: 1,
//     name: "WebBrain",
//     offline: true,
//     online: true,
//     individual: false
// }

// for (i in obj) {
//     if(typeof obj[i]==="boolean"){
//         console.log(i+': '+obj[i]);
//     }

// }

// 1)array
// let num = [2, 3, 5, 3, 2, 3, 6, 8, 7, 6]
// let a = []
// for (let i = 0; i < num.length; i++) {
//     if (!a.includes(num[i])) {
//         a.push(num[i])

//     }


// }
// console.log(a);

// 2)
// let arr = [1, 64, 8, 27, 64, 125];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= 10 && arr[i] <= 99) {
//         console.log(arr[i]);
//     }

// }

// 3)

