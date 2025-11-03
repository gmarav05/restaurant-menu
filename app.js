import { menuArray } from "./data.js"

const items = document.getElementById("menu-items")
const complete = document.getElementById("complete-btn")
const modalBtn = document.getElementById("modal")
const payBtn = document.getElementById("pay-btn")
const checkoutSection = document.getElementById("checkout-section")
const placeOrder = document.getElementById("place-order-title") 
// const itemsCheckout = document.getElementById("checkout-section")
// let orderedItems = []
let orderedItems = []

menuArray.forEach(function(item) {
    items.innerHTML += 
        `<div class="card">
            <div class="emoji">${item.emoji}</div>    

                <div class="item-details" id="${item.id}">
                    <h2 class="item-name">${item.name}</h2>
                    <p class="ingredients">${item.ingredients}</p>
                    <p class="price">₹${item.price}</p>
                </div>

                <div class="add-btn">
                    <button class="add" data-item="${item.id}">+</button>
                </div> 
        </div>
        <hr>  `
})
  
document.addEventListener('click', function(e) {
    if (e.target.dataset.item) {
        handleClick(Number(e.target.dataset.item))       
    }
})

function handleClick(orderId) {
   orderedItems = menuArray.filter(function(item) {
        // console.log(typeof item.id)
        // console.log(typeof orderId) 

        if ( item.id === orderId) {
            item.quantity++
            return item
        }
    })

    getOrderItems(orderedItems)
    // render(orderedItems)
}

function getOrderItems(orderedItems) {

    let finalCheckout = ''

    orderedItems.forEach(function(item) {
                                            //x ${item.quantity}
       finalCheckout += 
        `<div class="container card">

            <div class="checkout-items" id="orderItems">
                <p id="${item.id}">${item.name}</p> 
            </div>

            <button class="remove-item" data-item="${item.id}">remove</button>

            <div class="checkout-price">₹${item.price}</div>

        </div>`

    })

    checkoutSection.innerHTML += finalCheckout

    // return finalCheckout
}


// document.addEventListener('click', function(e) {
//     if (e.target.dataset.item) {
//         removeItemClick(Number(e.target.dataset.item))       
//     }
// })

// function removeItemClick(removeId) {
//     orderedItems.forEach(function(item) {
//         if (item.includes(removeId)) {
//             console.log(item.includes(removeId))
//         }
//     })
// }



// function render(orderedItems) {
//     checkoutSection.innerHTML += getOrderItems(orderedItems)
// }

// render()





complete.addEventListener('click', function(){
    modalBtn.style.display = 'inline'
})

payBtn.addEventListener('click', function(){
    checkoutSection.style.display = 'none'
    placeOrder.style.display = 'inline'
})
