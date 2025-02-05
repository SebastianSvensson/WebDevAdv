//--------------Sheet 3p2 --------- Assignment 3 ------------//
// Server
app.post("/api/products", express.json(), (req, res) => {
    let newItem = req.body;
    console.log("Recieved new item: ", newItem);

    if(newItem.name && newItem.price) {
        console.log("newItem has name and price")
        const itemToAdd = {
            id: products.length + 1,
            name: newItem.name,
            price: newItem.price
        }

        products.push(itemToAdd);
        console.log("update products: ", products);
        res.json({
            message: "POST - created new item",
            data: itemToAdd
        })

    } else {
        res.json({
            message: "POST - newItem doesn have name and/or price",
        });
    }
    
})

// CLient
function addProduct(name, price) {
    fetch('http://localhost:3000/api/products', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({name, price}),
    })
        .then(res => res.json())
        .then(data => {
            console.log('New product added:', data);
        })
        .catch(err => console.error("Error adding product:", err));
}
addProduct("TV", 700);

//--------------Sheet 3p2 --------- Assignment 4 ------------//
// Server
app.put("/api/products/:id", express.json(), (req, res) => {
    const itemId = parseInt(req.params.id);
    const updatedData = req.body;
    const itemIndex = products.findIndex(product => product.id === itemId)

    if(itemIndex !== -1) {
        console.log("Item index is in range")
        products[itemIndex] = { id: itemId, ...updatedData};
        console.log("Products has been UPDATED with PUT:", products);
        res.json({
            message: `POST updated item with id ${itemId}`,
            data: updatedData,
        })
    } else {
        res.json({
            message: `PUT - did not change item with id ${itemId}`,
        })
    }
})
// Client
function updateProduct(id, name, price) {
    fetch(`http://localhost:3000/api/products/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({name, price}),
    })
        .then(res => res.json())
        .then(data => {
            console.log(`Product with Id: ${id} Updated:`, data)
        })
        .catch(err => console.error("Error updating item", err));
}

updateProduct(3, "TVC", 800);

//--------------Sheet 3p1 --------- Assignment 4 ------------//

let arrayOfCountries = [];
const JSON_url = "https://gist.githubusercontent.com/mapoto/515827c73f7f60a14cf2914f0cca16f0/raw/c41bc850bc989cadf6a1caa394ab12fce105d59e/countries.json"
fetch(JSON_url)
    .then(res => res.json())
    .then(data => {
        arrayOfCountries = data;
        let countryNames = arrayOfCountries.map(country => country.name);
        console.log(countryNames);

        let ul = document.createElement("ul");
        countryNames.forEach(name => {
            let li = document.createElement("li");
            li.textContent = name;
            ul.appendChild(li)
        });
        document.body.appendChild(ul);
    })
    .catch(err => console.error('Error when fetching JSON:', err));

//--------------Sheet 2p2 --------- Assignment 6 ------------//
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


//--------------Sheet 2p1 --------- Assignment 7 ------------//
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

//--------------Sheet 1p2 --------- Assignment 6 ------------//
const users = [
    {id: 1, name: 'Alice'},
    {id: 2, name: 'Bob'},
    {id: 3, name: 'Charlie'}
];

let arrayOfUserNames = users.map(user => user.name)

console.log(arrayOfUserNames)

//--------------Sheet 1p2 --------- Assignment 7 ------------//

let arrayOfFruits = ['apple', 'banana', 'apple', 'cherry', 'banana', 'apple']

let occurencesOfFruits = arrayOfFruits.reduce((count, fruit) => {
    if(count[fruit]) {
        ++count[fruit]
    } else {
        count[fruit] = 1
    }
    return count
}, {})

console.log(occurencesOfFruits)

//--------------Sheet 1p1 --------- Assignment 10 ------------//
class Rectangle {
    constructor(width, height){
        this.width = width
        this.height = height
    }

    getArea() {
        return this.width * this.height
    }

    static isSquare(rectangle){
        return rectangle.width === rectangle.height
    }
}

const rect = new Rectangle(10, 5);
console.log(rect.getArea());
console.log(Rectangle.isSquare(rect));

const square = new Rectangle(5, 5);
console.log(square.getArea());
console.log(Rectangle.isSquare(square));