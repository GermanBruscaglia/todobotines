 export default function modal(container){
    
    const $fragment = document.createDocumentFragment()
    async function getData(jsonType){ 
        try {
           
            let res = await fetch("db.json"), 
                json = await res.json(),
                jsonFeatured = json.featured,
                jsonGrass = json.grass,
                jsonIndoor = json.indoor,
                jsonSynthetic = json.synthetic,
                jsonAccesories = json.accesories
              

                const containerCards = document.querySelector(container)
                const allBtnCards = document.querySelectorAll(".btn-card")
                
                switch (containerCards.classList.value) {
                    case "container-cards":
                        jsonType = jsonFeatured
                        break;

                    case "container-grass":
                        jsonType = jsonGrass
                        break;

                    case "container-indoor":
                        jsonType = jsonIndoor
                        break;

                    case "container-synthetic":
                        jsonType = jsonSynthetic
                        break;

                    case "container-accesories":
                        jsonType = jsonAccesories
                        break;

                    default:
                        break;
                }
                document.addEventListener("click", e => {
                    const $modal = document.querySelector(".modal")
                    for(let i = 0; i < allBtnCards.length; i++){
                        
                        if(e.target == allBtnCards[i]){
                            e.preventDefault()
                            $modal.innerHTML = `
            <div class="card-buy">

                <div class="img-card-buy">
                    <img src="${jsonType[i].imagen}" alt="">
                </div>

                <div class="description-card-buy">
                    <div class="info-product">
                        <ul>
                            <li>Marca:${jsonType[i].marca}</li>
                            <li>Modelo:${jsonType[i].modelo}</li>
                            <li>Precio: $${jsonType[i].precio}</li>
                        </ul>
                    </div>
                    <div class="info-pay">
                        <ul>
                            <li><i class="fa-brands fa-cc-visa "></i> <i class="fa-brands fa-cc-mastercard "></i> <i class="fa-brands fa-cc-amex "></i> <i class="fa-brands fa-cc-paypal "></i></li>
                            <li><i class="fa-solid fa-credit-card"></i> Cuotas fijas</li>
                            <li><i class="fa-solid fa-truck-fast"></i> Envios</li>
                            <li><i class="fa-solid fa-shop"></i> Retiro en sucursal</li>
                        </ul>
                    </div>
                </div>
                <a href="#" class="close-modal">X</a>
            </div>
                            `
                            $modal.classList.add("show-modal")

                        if(e.target.matches(".btn-buy")){
                        console.log(jsonType[i].marca)
                    }    
                    }
                    
                    }
                    if(e.target.matches(".close-modal") || e.target.matches(".modal")){
                        e.preventDefault()
                        $modal.classList.remove("show-modal")
                    }
                    
                    }
                                ) 
                         }catch(err){
                             console.log(err)
                             container.innerHTML = `Ocurrio un Error en la carga de datos`
                         } 
    }
    getData() 
}