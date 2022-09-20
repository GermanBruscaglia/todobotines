import acordeon from "./modules/acordeon.js";
import btnMenu from "./modules/boton_menu.js";
import {carousel, cards} from "./modules/carousel.js";
import sliderTime from "./modules/slider.js";
import modal from "./modules/modal.js";

import insertCart from "./modules/insert_cart.js";



document.addEventListener("DOMContentLoaded", e => {
   btnMenu() 
   sliderTime()
   carousel()
   cards()
   acordeon()
   modal(".container-cards")
   insertCart(".list-cart-index")
})






