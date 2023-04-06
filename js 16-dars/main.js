// Error handling,callback,promise,async await,generator functions

// try {
//     // console.log(number);
//     throw new Error("smth wrong")
// } catch (error) {
//     console.log(error.message);
// }

// callback function
var database = {
    miftohiddin: {
        login: "abs",
        password: 12345
    },
    toshmat: {
        login: "tosh",
        password: 12345
    }
}
// console.log("started");
// const login = (lg, pw, callback) => {
//     setTimeout(() => {
//         if (database.miftohiddin.login === lg && database.miftohiddin.password === pw) {
//             return callback( `Xush kelibsiz`)
//         } else {
//             return callback(`Xato login yoki parol`)
//         }
//     }, 1000)

// }
// const user = login("ab", 12345, (usr) => {
//     console.log(usr)

//     console.log("finished");
// })


// promise
// console.log("started");
// let promise = new Promise((resolve, reject) => {
//     if (database.miftohiddin.login === "aas" && database.miftohiddin.password === 12345) {
//         resolve(`Xush kelibsiz`)
//     } else {
//         reject(`Xato login yoki parol`)
//     }
// })
// promise
// .then((res)=>console.log(res))

// .catch((err)=>{console.log(err);})
// .finally(()=>{console.log("finished")})

// let all = Promise.all([
//     new Promise((resolve, reject) => {
//         if (database.miftohiddin.login === "abs" && database.miftohiddin.password === 12345) {
//             resolve(`Xush kelibsiz`)
//         } else {
//             reject(`Xato login yoki parol`)
//         }
//     }),
//     new Promise((resolve, reject) => {
//         if (database.miftohiddin.login === "abs" && database.miftohiddin.password === 12345) {
//             resolve(`Xush kelibsiz`)
//         } else {
//             reject(`Xato login yoki parol`)
//         }
//     })
// ])
// all.then((res)=>console.log(res)).catch((err)=>console.log(err))

// async await

// let promise = new Promise((resolve, reject) => {
//     if (database.miftohiddin.login === "abs" && database.miftohiddin.password === 12345) {
//         resolve(`Xush kelibsiz`)
//     } else {
//         reject(`Xato login yoki parol`)
//     }
// })

// const get = async () => {
//     let usr = await promise
//     console.log(usr);
// }
// get()


// generator function,yield

// function* get() {
// let id = users.length
// while(true){
//     yield id++ 
// }
// }
// const generator = get()
// let users = [
//     { id: 1, name: "eshmat" },
//     { id: 2, name: "eshmat2" },
//     { id: 3, name: "eshmat3" },
//     { id: 4, name: "eshmat4" },
//     { id: 5, name: "eshmat5" },

// ]
// const onDelete = (id) => {
//     let res = users.filter((value) => value.id !== id)
//     users = res
// }
// const add = (usr) => {
//     users = [...users, { id:generator.next().value+1, name: usr }]
// }
// add("toshmat1")
// onDelete(3)
// add("toshmat2")
// add("toshmat3")

// console.log(users);
