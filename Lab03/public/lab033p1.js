// This is the client side JS

//3p1: 1 factorial of a number
const calcFactorial = (n) => {
    if(n<0) {
        return -1;
    }

    let result = 1;
    for(let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
};

console.log(calcFactorial(5));

//3p1: 2 arrow func with default params
const additionWithDefault = (n1, n2 = 10) => {
    return n1 + n2;
}

console.log(additionWithDefault(2)); // 12

//3p1: 3 Pass anonymous func to filter
let array = [5, 10, 15, 20, 30, 30, 45, 1, 3, 20, 50];
let filteredArray = array.filter((number) => {
    return number > 10;
})

console.log(filteredArray);

//3p1: 4 Fetch a JSON file
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

//3p1: 5 Download and display image
// const imageUrl = "http://riehmann.net/assets/projects/foodviz/FooVizExample.png";

// fetch(imageUrl)
//     .then(res => res.blob())
//     .then(blob => {
//         const imageURL2 = URL.createObjectURL(blob);
//         const imageElement = document.createElement("img");
//         imageElement.src = imageURL2;
        
//         let imgContainer = document.getElementById("image-container");
//         imgContainer.appendChild(imageElement);
//     });

    // fetch('http://localhost:3000/FooVizExample.png')
    // .then(res => res.blob())
    // .then(blob => {
    //     const imageURL2 = URL.createObjectURL(blob);
    //     const imageElement = document.createElement("img");
    //     imageElement.src = imageURL2;
        
    //     let imgContainer = document.getElementById("image-container");
    //     imgContainer.appendChild(imageElement);
    // });

// 3p2: 2 Building GET endpoints

function fetchProducts() {
    fetch('http://localhost:3000/api/items')
        .then(res => res.json())
        .then(data => {
            console.log('All products:', data);
            
        })
        .catch(error => console.error('Error fetchign products:', error));
}

function fetchProductsById(id) {
    fetch(`http://localhost:3000/api/items/${id}`)
        .then(res => res.json())
        .then(data => {
            console.log(`Product with id: ${id}`, data);
        })
        .catch(error => console.error(`Error fetching product with id: ${id}`, error));
}

fetchProducts();
fetchProductsById(2);
fetchProductsById(1);
fetchProductsById(3);

//3p2: 3 Handling POST requests
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

addProduct('TV', 700);

//3p2: 4 PUT request
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


//3p2: 5 DELETE
function deleteProduct(id) {
    fetch(`http://localhost:3000/api/products/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(res => res.json())
        .then(data => {
            console.log(`Product with id: ${id} deleted`, data);
        })
        .catch(err => console.error(`Error deleting product with ID: ${id}`));
}

deleteProduct(1);