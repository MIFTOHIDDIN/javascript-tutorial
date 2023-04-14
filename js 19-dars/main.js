// DOM-2,createElement,scroll,mouseEvent,addEventListener,bubbling,stopPropagation,infinity scroll bar
// onmousemove,onmousedown,onmouseup,onmouseover,onmouseout,oncontextmenu(mishkani ong tomoni bossa),oncopy,onchange
// onkeypress,ondblclick,event.key,event.type,event.code

// let parent = document.querySelector(".parent")

// let dv = document.createElement("div")
// let txt = document.createTextNode("Hey DOM")
// // dv.innerHTML = txt
// dv.setAttribute("id","div")
// // console.log(txt);
// dv.append(txt)
// parent.append(dv)
// // parent.before(dv)
// // parent.preappend(dv)
// // parent.append(dv)
// div.style.border = "2px solid"
// dv = parent.cloneNode(true)
//  console.log(parent.scrollHeight);
//  console.log(parent.scrollWidth);
// function sr(){
//     // parent.scrollBy(0,50)
//     parent.scrollTo(0,50)
//     console.log("he");
// }
// console.log(parent.getBoundingClientRect());

// function sr(){
//     console.log("hey");
// }
// parent.addEventListener("mousemove",()=>{
//     console.log("hey");
// })
// function onclick() {
//     console.log("click");
// }
// function onmousedown() {
//     console.log("mousedown");
// }
// function onmouseup() {
//     console.log("mouseup");
// }
// class Event {
//     handleEvent(event) {
//         switch (event.type) {
//             case "click":
//                 console.log("click");
//                 break;
//             case "mousedown":
//                 console.log("mousedown");
//                 break;

//             default:
//                 break;
//         }
//     }
// }
// const evn = new Event()
// button.addEventListener("click", evn)
// button.addEventListener("mousedown", evn)

// function grandparent(event){

//     console.log("gr");
// }
// function parent(event){
//     console.log("pr");
//     event.stopPropagation()

// }
// function child(event){

//     console.log("child");
//     // event.stopPropagation()
//     // event.stopImmediatePropagation()
// }
// 
// event.preventDefault ->bu return false degani,yani undan keyingi actionlarni toxtatib qoyadi


// let button = document.querySelector("#button")
// button.addEventListener("contextmenu",()=>{
//     alert("hey")
// })

// button.oncopy = () => {
//     alert("copy not allowed")
//     return false
// }
// button.ondblclick = () => {
//     alert("double clicked")

// }
// button.onclick = (event) => {
//     if(event.altKey){
//         alert("alt")
//     }
//     if(event.shiftKey){
//         alert("shift")
//     }
//     if(event.ctrlKey){
//         alert("ctrl")
//     }
//     if(event.metaKey){
//         alert("cmd")
//     }
//     console.log(event);

// }
// function key(event){
//     console.log(event.key,event.type,event.code);
// }

// infinity scroll bar

// let box = document.querySelector(".box")

// box.addEventListener("scroll", (event) => {
//     console.log(event.target.scrollTop + event.target.clientHeight + 50 > event.target.scrollHeight);
//     if (event.target.scrollTop + event.target.clientHeight + 50 > event.target.scrollHeight) {
//         box.textContent += box.textContent
//     }
// })

// =======================
// let root = document.querySelector(".root")
// root.style.cssText = ` height: 500px;
// width: 500px;
// background-color: rgb(0, 195, 0);border:10px solid`

// root.innerHTML = `<img id="ball" src="https://www.transparentpng.com/thumb/ball/b9q1Xn-ball-hd-image.png" alt="">`

// let ball = document.querySelector("#ball")
// ball.style.cssText = `width: 100px;position: absolute;transition:0.3s;`


// root.addEventListener("mousedown", (event) => {

//     ball.style.left = (event.x - ball.clientHeight / 2) + "px",
//         ball.style.top = (event.y - ball.clientWidth / 2) + "px"


//     console.log(event.x, event.y);



// })
// ========================
// let root = document.querySelector(".root")
// root.style.cssText = ` font-size: 22px;

// height:25px;
// overflow: auto;display:flex`

// let div = document.createElement("div")
// div.style.display = "flex"

// let p1 = document.createElement("p")
// p1.innerHTML = "∆"
// p1.setAttribute("onclick", "more()")

// let p2 = document.createElement("p")
// p2.innerHTML = "Sweeties (click me)! "

// let p3 = document.createElement("p")
// p3.innerHTML = "Cake"

// let p4 = document.createElement("p")
// p4.innerHTML = "Donut"

// let p5 = document.createElement("p")
// p5.innerHTML = "Honey"

// let div2 = document.createElement("div")
// div.style.display = "grid"

// root.append(div)
// root.append(div2)
// div2.append(p2)
// div2.append(p3)
// div2.append(p4)
// div2.append(p5)
// div.append(p1)

// console.log(root);
// let condition = true
// function more() {
//     if (condition == true) {

//         root.style.cssText = `height:100%;display:flex`
//         p1.innerHTML = ">"
//         condition = false
//     } else if (condition == false) {
//         root.style.cssText = `height:${p2.clientHeight}px;display:flex`
//         p1.innerHTML = "∆"
//         condition = true
//     }
// }
// ====================

// let root = document.querySelector(".root")
// root.style.cssText = `width:450px;height:150px;display:flex;overflow:auto`

// function prev(){

// }
// function next(){
//     // root.style.cssText = `width:450px;height:150px;display:flex;overflow:auto;`
//     root.style.marginRight = `-150px`
// }



let ar = "  asd   we    "
console.log(ar.trim());