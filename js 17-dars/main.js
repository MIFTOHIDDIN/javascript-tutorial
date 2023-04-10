// modules,curry function,proxy,reflect

// export let name = "webbrain"

// export let obj = {
//     name: "eshmat",
//     year: 2012
// }
// console.log(obj);
// export default name


// curry function
// function merge(a) {
//     return (b) => {
//         return (c) => {
//             return (d) => {
//                 return (e) => {
//                     console.log(a + b + c + d);

//                 }
//             }
//         }
//     }
// }
// merge("There ")('is ')('no ')('spoon ')()

// proxy

// let obj = {
//     name: "webbrain",
//     _stir: 12345
// }
// let proxy = new Proxy(obj, {
//     // get(target, property) {
//     //     if (property.startsWith("_")) return "qabul qilinmadi"
//     //     return target[property]
//     // },
//     // set(target,property,value){
//     //     if(property == "_stir"){
//     //         console.log("stirni ozgartira olmaysiz"); 
//     //     }
//     //     else{
//     //         return target[property]
//     //     }


//     // }
//     ownKeys(target){
//         return Object.keys(target).filter((value)=> !value.startsWith("_"))
//     }
// })

// proxy._stir = "it"

// console.log(proxy);
// for(vl in proxy){
//     console.log(vl);
// }

// let range = {
//     from: 1,
//     to: 10
// }

// let proxy = new Proxy(range, {
//     has(target, property) {
//         return target.from <= property && target.to >= property
//     }
// })
// proxy.to = 100
// console.log(99 in proxy);
// let user = { name: "webbrain", age: 12 }
// Reflect.set(user,"title","IT")

// console.log(Reflect.get(user,"name"));


































