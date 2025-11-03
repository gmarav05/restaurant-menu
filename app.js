import { menuArray } from "./data.js"

const items = document.getElementById("menu-items")
const complete = document.getElementById("complete-btn")
const modalBtn = document.getElementById("modal")
const payBtn = document.getElementById("pay-btn")
const checkoutOrder = document.getElementById("checkout-order")
const checkoutSection = document.getElementById("checkout-section")
const placeOrder = document.getElementById("place-order-title")
const totalOrderPrice = document.getElementById("total-price")

const form = document.getElementById('payment-details')

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
        checkoutOrder.style.display = 'inline'
    }     
    if (e.target.dataset.remove) removeItem(Number(e.target.dataset.remove))       
})

function handleClick(orderId) {

    menuArray.forEach(function(item) {

        if ( orderedItems.includes(orderId)) {
            orderedItems.quantity++  
        } else if ( item.id === orderId) {
            orderedItems.push(item)   
        } 
    })
    renderItems()
}

function renderItems() {
    let finalCheckout = ''

    orderedItems.forEach(function(item) {

       finalCheckout += 
        `<div class="container card">
        <div class="checkout-items" id="orderItems">
            <p id="${item.id}">${item.name}</p> 
        </div>

        <button class="remove-item" data-remove="${item.id}"
        id="remove-btn">remove</button>

        <div class="checkout-price">₹${item.price}</div>
        </div>`
        console.log(orderedItems)  
    })

    totalPrice()
    checkoutSection.innerHTML = finalCheckout
}

function removeItem(removeId) {
    console.log("remove : " + removeId)  
    const findIndex = orderedItems.findIndex(item => item.id === removeId)
    findIndex !== -1 && orderedItems.splice(findIndex, 1)
    renderItems()
}

function totalPrice() {
    const total = orderedItems.reduce(function(total, currentItem){
        return total + currentItem.price
    },0)
    totalOrderPrice.textContent = `₹${total}`
}

complete.addEventListener('click', function(){
    modalBtn.style.display = 'inline'
     payBtn.disabled = true
})

form.addEventListener('input', function(){
    if (form.checkValidity()) {
        payBtn.disabled = false
    }
})

payBtn.addEventListener('click', function(e){
    e.preventDefault()
    checkoutOrder.style.display = 'none'
    placeOrder.style.display = 'inline'
    modalBtn.style.display = 'none'   
})