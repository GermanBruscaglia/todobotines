export default function openMap(){
   

    document.addEventListener("click", e => {

        const  $btnMap = document.querySelectorAll(".btn-map-store")
        for(let i = 0; i<$btnMap.length; i++){
            if(e.target == $btnMap[i]){
            e.preventDefault()
        }
        }
        
        switch (e.target) {
            case $btnMap[0]:
                window.open("https://goo.gl/maps/XXPeoCbhDZ18DtGN6","ventana1", "width=900,height=500")
                break;
            case $btnMap[1]:
                window.open("https://goo.gl/maps/Bt5DnPrZuDui4SBj6","ventana2", "width=900,height=500")
                break;
            case $btnMap[2]:
                window.open("https://goo.gl/maps/V8qSv8pVZiLpFdwKA","ventana3", "width=900,height=500")
                break;
            case $btnMap[3]:
                window.open("https://goo.gl/maps/xWQRFddzfG5CK4ry9","ventana4", "width=900,height=500")
                break;
        
            default:
                break;
        } 
    })
    
}