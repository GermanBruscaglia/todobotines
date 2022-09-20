import acordeon from "./modules/acordeon.js"
import btnMenu from "./modules/boton_menu.js"
import insertCart from "./modules/insert_cart.js"
import modal from "./modules/modal.js"
import printCard from "./modules/print_cards.js"

 document.addEventListener("DOMContentLoaded", e => {
     printCard(".container-indoor")
     btnMenu()
     modal(".container-indoor")
     acordeon()
     insertCart(".list-cart-indoor")
 })