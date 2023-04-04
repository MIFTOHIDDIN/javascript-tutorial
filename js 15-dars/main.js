// // Class- code-template for creating object
// class User {
//     // computed name
//     ["web"+"brain"](title){
//         console.log(title);
//     }

//     // constructor(title){
//     //     this.title = title


//     // }

//     // set welcom(value){
//     //     console.log(value);

//     // }
//     // get welcom(){
//     //     console.log("a");
//     //     console.log(`hi ${this.title},welcome`);
//     // }
// }
// let obj1 = new User("eshmat")
// let obj2 = new User("toshmat")

// obj1.webbrain("web")


// inherits-meros olish(extends-keyword)
// super,extends,constructor

// class Animal {
//     // parent(){
//     //     console.log("parent");
//     // }

//     speed(speed) {
//         console.log(`run ${speed}km speed`);
//     }
// }
// class Rabbit extends Animal {
//     // child(){
//     //     console.log("Child");
//     // }

//     info() {
//         // this.child()
//         // super.parent()
//         console.log("Quyonni 2ta qulogi bor");
//     }
// }
// class Wolf extends Animal{
//     info(){
//         console.log("borini 2ta qulogi bor");
//     }
// }
// let rab = new Rabbit("Quyon")
// let rab2 = new Rabbit("tulki")

// // let wolf = new Wolf()
// rab2.speed(15)
// rab.speed(12)


// class Animal {
//     constructor(name) {
//         this.name = name
//     }
//     speed(speed) {
//         console.log(`${this.name} ${speed}km speed`);
//     }
// }
// class Rabbit extends Animal {

//     constructor(name) {
//         super(name)

//     }
//     info() {

//         console.log("Quyonni 2ta qulogi bor");
//     }
// }

// static

// class User {
//     static age = 0
//     static getAGe() {
//         console.log(++this.age);
//     }
// }
// let st1 = new User()
// let st2 = new User()

// User.getAGe()
// User.getAGe()
// User.getAGe()
// User.getAGe()
// User.getAGe()


// Public-_ , private-#
// class User {
//     #name = "webbrain"
//     getName(){
//         console.log(this.#name);
//     }
// }
// let usr = new User()
// usr.getName()

// // Built in classes
// class ar extends Array{}
// class obj extends Object{}

// let usr = new ar()
// console.log(usr.length);


// instanceof-(nimadir)ga tegishli---true yoki false

// class ar extends Array{}
// let usr = new ar()
// console.log(usr instanceof Number);

// mixins
// class User {
//     getName() {
//         console.log("no name");
//     }
// }

// let obj = {
//     info() {
//         console.log("no info");
//     }
// }
// Object.assign(User.prototype, obj)

// let us = new User()
// us.info()
