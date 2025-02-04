console.log("it works")

//2p1: 1 Access Parent Element
let body = document.body

let new_section = document.createElement("section")
body.appendChild(new_section)

let new_div = document.createElement("div")
new_section.appendChild(new_div)

let new_p = document.createElement("p")
new_div.appendChild(new_p)

let select_p = document.querySelector("p")
console.log(select_p.parentElement)

//2p1: 2 Access children of an element
let new_div2 = document.createElement("div")
body.appendChild(new_div2)

for (let i=0; i< 3; ++i) {
    let new_span = document.createElement("span")
    new_div2.appendChild(new_span)
}

let span_elements = new_div2.getElementsByTagName("span")
console.log(span_elements)

//2p1: 3 Access Sibling elements
let new_ul = document.createElement("ul")

body.appendChild(new_ul)

for(let i = 0; i < 3 ; ++i) {
    let new_li = document.createElement("li")
    new_li.textContent = "list item " + (i+1)
    new_li.setAttribute("id", "li"+(i+1))
    new_ul.appendChild(new_li)
}

let selected_li = document.getElementById("li2")

console.log(selected_li.previousElementSibling)
console.log(selected_li.nextElementSibling)

//2p1: 4 Access all child nodes
let new_div3 = document.createElement("div")
new_div3.setAttribute("id", "container")
new_div3.textContent = "This is div-text"
body.appendChild(new_div3)

let new_p2 = document.createElement("p")
new_p2.textContent = "this is a p2"

new_div3.appendChild(new_p2)

console.log(new_div3.childNodes)

//2p1: 5 Access first and last child
let new_div4 = document.createElement("div")
body.appendChild(new_div4)

for(let i = 0; i < 5; ++i) {
    let new_p3 = document.createElement("p")
    if(i == 0) new_p3.textContent = "This is the first";
    if(i == 4) new_p3.textContent = "This is the last";
    if(i != 0 && i != 4) new_p3.textContent = "This is one in the middle"
    new_div4.appendChild(new_p3)
}

console.log(new_div4.firstElementChild)
console.log(new_div4.lastElementChild)

//2p1: 6 Navigate multiple levels
let new_section2 = document.createElement("section")
let new_div5 = document.createElement("div")
let new_p4 = document.createElement("p")

body.appendChild(new_section2)
new_section2.appendChild(new_div5)
new_div5.appendChild(new_p4)

let selected_p4 = new_div5.querySelector("p")
let section_parent = selected_p4.closest("section")

console.log(section_parent)

//2p1: 7 Count child elements
let new_ul2 = document.createElement("ul")
body.appendChild(new_ul2)

for(let i = 0; i < 5; ++i) {
    let new_li2 = document.createElement("li")
    new_li2.setAttribute("id", "listItem"+(i+1))
    new_ul2.appendChild(new_li2)
}

console.log(new_ul2.children.length)

for (let child of new_ul2.children) {
    console.log(`Id: ${child.id}`)
}

//2p1: 8 Access the parent of the parent
let new_section3 = document.createElement("section")
let new_div6 = document.createElement("div")

body.appendChild(new_section3)
new_section3.appendChild(new_div6)

let body_element = new_div6.parentElement.parentElement
console.log(body_element)

    // Alternatively
body_element = new_div6.closest("body")
console.log(body_element)

//2p1: 9 Select specific child
let new_div7 = document.createElement("div")
body.appendChild(new_div7)

for(let i = 0; i < 3; ++i) {
    let new_p5 = document.createElement("p")
    new_p5.textContent = `${i}`
    new_div7.appendChild(new_p5)
}

console.log(new_div7.children[1])

//2p1: 10 Traverse all siblings
let new_ul3 = document.createElement("ul")
body.appendChild(new_ul3)

for(let i = 0; i < 5; ++i) {
    let new_li3 = document.createElement("li")
    new_li3.textContent = `${i}`
    new_ul3.appendChild(new_li3)
}

let first_child = new_ul3.firstElementChild
let current_child = first_child

while(current_child) {
    console.log(current_child)
    current_child = current_child.nextElementSibling
}

//2p2: 1 Changing Content
let p_element = document.getElementById("paragraph")
p_element.textContent = "DOM Manipulation is fun!"

//2p2: 2 Changin style
let new_button = document.createElement("button")
let new_div8 = document.createElement("div")
body.appendChild(new_button)
body.appendChild(new_div8)

new_button.textContent = "Click me"
new_div8.textContent = "Placeholdertext"

new_button.addEventListener("click", () => {
    new_div8.style.color = "blue"
})

//2p2: 3 Adding a new element
let ul_element = document.getElementById("myUl")
for(let i = 0; i < 3; i++) {
    let li = document.createElement("li")
    li.textContent = "List item in 3: " + (i+1)
    ul_element.appendChild(li)
}

//2p2: 4 Removing an element
let new_button2 = document.createElement("button")
let new_div9 = document.createElement("div")
body.appendChild(new_button2)
body.appendChild(new_div9)

new_div9.id = "removeMe"
new_div9.textContent = "Oh no, dont click the button"

new_button2.textContent = "Click me"

new_button2.addEventListener("click", () => {
    new_div9.remove()
})

//2p2: 5 Handling input

let new_inputfield = document.createElement("input")
body.appendChild(new_inputfield)

let new_div10 = document.createElement("div")
body.appendChild(new_div10)

new_inputfield.addEventListener("input", () => {
    new_div10.textContent = new_inputfield.value;
})

//2p2: 6 Toggling visibility
let new_button3 = document.createElement("button")
let new_p6 = document.createElement("p")

body.appendChild(new_button3)
body.appendChild(new_p6)

new_p6.textContent = "Some text"
new_button3.textContent = "Button for some text"

new_button3.addEventListener("click", () => {
    if (new_p6.style.display === "none") {
        new_p6.style.display = "block"
    } else {
        new_p6.style.display = "none"
    }
})

//2p2: 7 Adding and removing classes

let new_div11 = document.createElement("div")
body.appendChild(new_div11)

new_div11.className = "box"

new_div11.textContent = `Current class ${new_div11.className}`

new_div11.addEventListener("click", () => {
    new_div11.classList.toggle("highlight");
    new_div11.classList.toggle("box");
    new_div11.textContent = `Current class ${new_div11.className}`;
})

//2p2: 8 Counting button clicks
let new_button4 = document.createElement("button")
body.appendChild(new_button4)

let new_p7 = document.createElement("p")
body.appendChild(new_p7)

let counter = 0
new_p7.textContent = `${counter}`
new_button4.textContent = "Click me to increase counter"

new_button4.addEventListener("click", () => {
    ++counter
    new_p7.textContent = `${counter}`
})

//2p2: 9 Creating a dropdown menu
let new_select = document.createElement("select")
let new_p8 = document.createElement("p")

body.appendChild(new_select)
body.appendChild(new_p8)

for(let i = 0; i < 3; ++i) {
    let new_option = document.createElement("option")
    new_option.value = `Option ${i+1}`
    new_option.text = `Option ${i+1}`
    new_select.appendChild(new_option)
}

new_p8.textContent = `Selected ${new_select.value}`

new_select.addEventListener("change", () => {
    new_p8.textContent = `Selected ${new_select.value}`
})

//2p2: 10 Building a Todo-list
let new_input = document.createElement("input")
body.appendChild(new_input)

let new_button5 = document.createElement("button")
body.appendChild(new_button5)

let new_ul4 = document.createElement("ul")
body.appendChild(new_ul4)

new_button5.textContent = "Add item"

new_button5.addEventListener("click", () => {
    let new_li4 = document.createElement("li")
    new_li4.textContent = new_input.value
    new_ul4.appendChild(new_li4)
    new_input.value = ""
})