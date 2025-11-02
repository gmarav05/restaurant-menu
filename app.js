import { menuArray } from "./data.js"

const items = document.getElementById("menu-items")
const complete = document.getElementById("complete-btn")
const modalBtn = document.getElementById("modal")
const payBtn = document.getElementById("pay-btn")
const checkoutSection = document.getElementById("checkout-section")
const placeOrder = document.getElementById("place-order-title") 

menuArray.forEach(function(item) {

    items.innerHTML += 
        `<div class="card">
            <div class="emoji">${item.emoji}</div>    

                <div class="item-details">
                    <h2 class="item-name">${item.name}</h2>
                    <p class="ingredients">${item.ingredients}</p>
                    <p class="price">₹${item.price}</p>
                </div>

                <div class="add-btn">
                    <button class="add">+</button>
                </div> 
        </div>
        <hr>  `
})


complete.addEventListener('click', function(){
    modalBtn.style.display = 'inline'
})

payBtn.addEventListener('click', function(){
    checkoutSection.style.display = 'none'
    placeOrder.style.display = 'inline'
})









