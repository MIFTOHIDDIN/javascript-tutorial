// JSON

// let obj = { name: "sda", age: 124, p: "asd" }
// // console.log(JSON.stringify(obj, Object.keys(obj),2));
// fetch("https://jsonplaceholder.typicode.com/users")
// .then(res=>res.json())
// .then(res=>console.log(res))

// recursion
// const get = (num) => {
//     if (num === 0) {
//         return 1;
//     } else {
//         return num * get(num-1)
//     }
// }
// console.log(get(3));


// let company = {
//     sales: [
//         { name: "Jhon", salary: 1000 },
//         { name: "alice", salary: 1600 }
//     ],
//     development: {
//         sities: [
//             { name: "peter", salary: 2000 },
//             { name: "Alex", salary: 1800 }
//         ],
//         internals: {
//             frontend: [{ name: "Jack", salary: 1300 }],
//             backend: [{ name: "Jhon", salary: 1300 }]
//         }
//     }
// }
// let sum = 0
// const getSalary = (data) => {
//     Object.values(data).forEach((value) => {
//         if (Array.isArray(value)) {
//             return sum += value.reduce((prev, cur) => prev + cur.salary, 0);
//         } else {
//             getSalary(value)
//         }
//     })
// }
// getSalary(company)
// console.log(sum);



// =================
// const get = (num) => {
//     if (num === 1) {
//         return 1
//     } else {
//         return num + get(num - 1)
//     }
// }
// console.log(get(100));
// ==============
// const get = (num) => {
//     if (num === 1) {
//         return 1
//     } else {
//         return num * get(num - 1)
//     }
// }
// console.log(get(5));
// ================
// function fib(n) {
//     if (n < 2) {
//       return n;
//     }
//     return fib(n - 1) + fib(n - 2);
//   }
//   console.log(fib(3)); // should print 2
//   console.log(fib(7)); // should print 13

 









