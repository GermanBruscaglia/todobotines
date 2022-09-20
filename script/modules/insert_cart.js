export default function insertCart(container){

    async function getData(jsonType){ 
        try {
            let res = await fetch("db.json"), 
                json = await res.json(),
                jsonFeatured = json.featured,
                jsonGrass = json.grass,
                jsonIndoor = json.indoor,
                jsonSynthetic = json.synthetic,
                jsonAccesories = json.accesories
            const $allBtnBuy = document.querySelectorAll(".btn-buy")
            const arrayID = []      
            const arrayPice = []
            const $total = document.querySelector(".total")         

                const containerCards = document.querySelector(container)
                switch (containerCards.classList.value) {
                    case "list-cart-index":
                        jsonType = jsonFeatured
                        break;

                    case "list-cart-grass":
                        jsonType = jsonGrass
                        break;

                    case "list-cart-indoor":
                        jsonType = jsonIndoor
                        break;

                    case "list-cart-synthetic":
                        jsonType = jsonSynthetic
                        break;

                    case "list-cart-accesories":
                        jsonType = jsonAccesories
                        break;

                    default:
                        break;
                }


                document.addEventListener("click", e => {
                    const $cartBuy = document.querySelector(container)
                    const itemCart = document.createElement("div")
    
                      for(let i = 0; i < $allBtnBuy.length; i++){

                            if(e.target == $allBtnBuy[i]){
                                let addCart = confirm("¿Agregar producto al carrito?")
                                if(addCart){
                                    if(arrayID.includes(jsonType[i].id)){
                                        alert("Ya agregaste este articulo al Carrito")

                                    }else{
                                arrayID.push(jsonType[i].id)
                                arrayPice.push(jsonType[i].precio)

                                  itemCart.innerHTML = `
                             <div class="product-cart">
                                 <div class="img-cart">
                                     <img src="${jsonType[i].imagen}" alt="">
                                 </div>
                                 <div class="description-cart">
                                     <h4>${jsonType[i].marca}</h4>
                                     <span>${jsonType[i].modelo}</span>
                                 </div>
                             </div>

                             <div class="price-cart">$${jsonType[i].precio}</div>

                             <div class="amount-cart">
                                 <span class="number-amount"></span>
                                 <div class="btn-amount">
                                     <span class="cantidad">1</span>
                                 </div> 
                             </div>
                             <span class="id-product">${jsonType[i].id}</span>
                              `                       
                                 itemCart.classList.add("item-cart")
                                 $cartBuy.insertAdjacentElement("beforeend", itemCart)
                                 let suma = 0
                                 for(let i = 0; i < arrayPice.length; i++){
                                  suma = suma + arrayPice[i]
                                  $total.innerHTML = `$ ${suma}`
                                 }
                                 if(arrayID >= 1){
                                document.querySelector(".active-cart").style.setProperty("border","solid thin white")   
                                document.querySelector(".btn-cart-buy").style.setProperty("color","greenyellow")                       
                        }
                               }
                            }
                           }
                    }  
                    
                        
                    } 
                                ) 
                         }catch(err){
                             console.log(err)
                             $cartBuy.innerHTML = `Ocurrio un Error en la carga de datos`
                         } 
    }
    getData() 
}


