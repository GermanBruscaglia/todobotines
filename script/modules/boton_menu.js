export default function btnMenu(){

const $btnSubmenu = document.getElementById("btn-submenu")
const $submenu = document.querySelector(".submenu")
const $btnMenuOpen = document.querySelector(".open")
const $btnMenuClose = document.querySelector(".close")
const $menu = document.getElementById("menu")
const $cartBuy = document.querySelector(".cart-buy")

    document.addEventListener("click", e => {
        if(e.target == $btnSubmenu || e.target.matches("#btn-submenu *")){
            e.preventDefault()
            $submenu.classList.toggle("submenu-active")
            document.querySelector(".arrow-down").classList.toggle("rotate-180")
        }
        if(e.target == $btnMenuOpen || e.target.matches(".open i")){
            e.preventDefault()
            $menu.classList.add("menu-active")
            $btnMenuClose.classList.add("z-index-1000")
        }
        if(e.target == $btnMenuClose || e.target.matches(".close i")){
            e.preventDefault()
            $menu.classList.remove("menu-active")
            $btnMenuClose.classList.remove("z-index-1000")
        }

        if(e.target.matches(".btn-cart-buy") || e.target.matches(".btn-cart-buy *")){
            e.preventDefault()
            $cartBuy.classList.toggle("show-cart-buy")
            if($menu.classList.contains("menu-active")) $menu.classList.remove("menu-active")
             if($btnMenuClose.classList.contains("z-index-1000")) $btnMenuClose.classList.remove("z-index-1000")
        }
        if(e.target.matches(".cart-buy")){
            if($cartBuy.classList.contains("show-cart-buy")) $cartBuy.classList.remove("show-cart-buy")
        }
    })
   } 


