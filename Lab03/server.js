const express = require("express");
const app = express();
const PORT = 3000;
const cors = require("cors");

// 3p2: 2 items for get-response
let products = [
    {id: 1, name: "Laptop", price: 1000},
    {id: 2, name: "Phone", price: 500},
];

app.use(cors());

//3p2: 1 Basic server things
app.get("/", (req, res) => {
    res.send("Welcome to the REST API");
});


// 3p2: 2 Building GET Endpoints
app.get("/api/items/:id", express.json(), (req, res) => {
    const itemId = parseInt(req.params.id);
    const item = products.find(product => product.id === itemId);

    if(item) {
        res.json({
            message: `GET item with id ${itemId}`,
            data: item,
        });
    } else {
        res.status(404).json({
            message: `Item with id ${itemId} not found`,
        });
    }
});

app.get("/api/items", express.json(), (req, res) => {
    console.log("api/items works")
    res.json({
        message: "GET all items",
        data: products,
    })
})

//3p2: 3 Handling POST requests
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

//3p2: 4 PUT requests for updating resorces
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

//3p2: 5 DELETE
app.delete('/api/products/:id', express.json(), (req, res) => {
    const itemId = parseInt(req.params.id);
    const itemIndex = products.findIndex(product => product.id === itemId);

    if(itemIndex !== -1) {
        const deletedItem = products.splice(itemIndex, 1);

        res.json({
            message: `DELETE - deleted item with id ${itemId}`,
            data: deletedItem,
        });
    } else {
        res.json({
            message: `DELETE - did not delete item with id ${itemId}`,
        })
    }
});

//3p2: 1 Basic server setup 
app.get("/index", (req, res) => {
    res.redirect("/index.html")
})

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
});

app.use('/', express.static('public'));