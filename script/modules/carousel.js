import Card from "./cards.js"
export function carousel(){
     const $left = document.querySelector(".left i"),
           $right = document.querySelector(".right i"),
           $containerCard = document.querySelector(".container-cards")

     document.addEventListener("click", e => {
         if(e.target == $right){
             e.preventDefault()
                 $containerCard.style.transform =  `translateX(-50%)`     
  }
         if(e.target == $left){
             e.preventDefault()
             $containerCard.style.transform =  `translateX(0)`          
                    }
     })
 }

 export function cards(){
    
    const $containerCards = document.querySelector(".container-cards") //creamos variable para la ol
    const $fragment = document.createDocumentFragment()//creamos fragmento

    async function getData(){ //como usamos asincronia debemos ejecutar todo dentro de una funcion que va a ser async
        try {
            //a cada respuesta debemos colocarle el await
            let res = await fetch("db.json"), //en la variable res introducimos la peticion del fetch 
                json = await res.json()
            //al igual que antes insertamos los elementos al dom
             json.featured.forEach((el) => {
                            //    const $li = document.createElement("li") //creamos los li
                            //    $li.innerHTML = `${el.imagen} -- ${el.marca} -- ${el.modelo} -- ${el.id}`//al li le insertamos los atributos que querramos
                            //    $fragment.appendChild($li)//le insertamos al fragmento los li
                               const card = new Card(el.imagen, el.marca, el.modelo, el.precio, el.id) 
                               
                               const $div = document.createElement("div")
                               $div.classList.add("card")
                               $div.innerHTML = `
                                <div class="img-card">
                                    <img src="${el.imagen}" alt="Imagen Botin">
                                </div>
                                <div class="description-card">
                                    <h4 class="title-card">${el.marca}</h4>
                                    <span class="model-card">${el.modelo}</span>
                                    <span class="price-card">$ ${el.precio}</span>
                                    <a href="#" class="btn-card">Ver más</a>
                                    <i class="fa-solid fa-cart-plus btn-buy"></i>
                                </div>
                                `
                                $fragment.appendChild($div)
                                $containerCards.appendChild($fragment)
                          })
        }catch(err){
                     console.log(err)
                     $containerCards.innerHTML = `Ocurrio un Error en la carga de datos`
                 }
    }
    getData() //llamamos a la funcion 
    }