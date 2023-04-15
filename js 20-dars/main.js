// form,new Range(),onblur(),onfocus()

// let form = document.forms.f

// console.log(form.elements.login);

// console.log(form.select.options);
// console.log(select.value = "ru");
// console.log(select.selectedIndex = 2);
// let login = document.querySelector("#login")
// login.onblur = (event)=>{
// console.log(event.target.value);
// }
// let login = document.querySelector("#login")
// login.onfocus = (event) => {
//     console.log(event);
// }

// range 
let range = new Range()
range.setStart(data[0].firstChild, 0)
range.setEnd(data[0].firstChild, 4)

window.getSelection().addRange(range)

button.onclick = () => {
    let span = document.createElement("em")
    // span.innerHTML = "Rea"
    // range.deleteContents()
    // range.cloneNode()
    // let res = range.extractContents()
    // txt.innerHTML += res.textContent
    range.surroundContents(span)
    // range.insertNode(span)
}