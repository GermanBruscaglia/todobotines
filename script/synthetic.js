import acordeon from "./modules/acordeon.js"
import btnMenu from "./modules/boton_menu.js"
import insertCart from "./modules/insert_cart.js"
import modal from "./modules/modal.js"
import printCard from "./modules/print_cards.js"

 document.addEventListener("DOMContentLoaded", e => {
     printCard(".container-synthetic")
     btnMenu()
     modal(".container-synthetic")
     acordeon()
     insertCart(".list-cart-synthetic")
 })