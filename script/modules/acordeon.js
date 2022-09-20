export default function acordeon(){
    const $btnStores = document.querySelectorAll(".btn-store"),
    $submenuStore = document.querySelectorAll(".submenu-store"),
    $arrowDown = document.querySelectorAll(".btn-store .arrow-down")

    document.addEventListener("click", e => {
                
        for(let i = 0; i < $btnStores.length; i++){
            if(e.target == $btnStores[i] || e.target == $arrowDown[i] ){
                e.preventDefault()
             $submenuStore[i].classList.toggle("btn-store-active")
             $arrowDown[i].classList.toggle("rotate-180")
         }
           
        }          
    })
}