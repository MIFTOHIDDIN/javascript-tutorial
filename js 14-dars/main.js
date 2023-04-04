// Proporties flag,DDOC attack,setter,getter

// let obj = { name: "eshmat", title: "toshmat" }
// // Object.defineProperty(obj,"name",{writable:false})
// // Object.defineProperty(obj,"name",{enumerable:false})
// Object.defineProperty(obj,"name",{configurable:false})

// delete obj.name
// console.log(obj);
// console.log(Object.getOwnPropertyDescriptor(obj, "name"));

// Object.preventExtensions(obj)-can uptade,no add,can delete
// Object.seal(obj)-can update , no add ,no delete
// Object.freeze(obj)-no update,no add,no delete

// setter,getter ->object valuesini ozgartirish uchun

// let obj = {
//     name: "eshmat",
//     title: "toshmat",
//     set getInfo(v) {
//         console.log("setter");
//         this.name = v
//     },
//     get getInfo() {
//         console.log("getter");
//         return `${this.name},${this.title}`;
//     }
// }
// obj.getInfo = "webbrain"

// console.log(obj.getInfo);

// DDOS ATTACK,CACHE

// function getData(x) {
//     return fetch(`https://jsonplaceholder.typicode.com/photos/${x}`).then(res => res.json())
// }

// const getCache = (func) => {
//     let cache = new Map()
//     return function (x) {
//         if (cache.has(x)) {
//             console.log(cache.get(x));
//         } else {
//             let res = func(x)
//             cache.set(x, res)
//             console.log(cache.get(x));

//         }
//     }
// }

// getData = getCache(getData)
