import Card from "./cards.js";

 export default function printCard(container){
    
    const $fragment = document.createDocumentFragment()
    async function getData(jsonType){ 
        try {
            let res = await fetch("db.json"), 
                json = await res.json(),
                jsonGrass = json.grass,
                jsonIndoor = json.indoor,
                jsonSynthetic = json.synthetic,
                jsonAccesories = json.accesories

                const content = document.querySelector(container)
                switch (content.classList.value) {
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
             jsonType.forEach((el) => {
                               const card = new Card(el.imagen, el.marca, el.modelo, el.precio, el.id) 
                               const $div = document.createElement("div")
                               $div.classList.add("card")
                               $div.innerHTML = `
                                <div class="img-card">
                                    <img src="${card.getImagen()}" alt="Imagen Botin">
                                </div>
                                <div class="description-card">
                                    <h4 class="title-card">${card.getMarca()}</h4>
                                    <span class="model-card">${card.getModelo()}</span>
                                    <span class="price-card">$ ${card.getPrecio()}</span>
                                    <a href="#" class="btn-card">Ver más</a>
                                    <i class="fa-solid fa-cart-plus btn-buy"></i>
                                </div>
                                `
                                $fragment.appendChild($div)
                                content.appendChild($fragment)
                          }) 
                         }catch(err){
                             console.log(err)
                             container.innerHTML = `Ocurrio un Error en la carga de datos`
                         }             
    }
    getData()
}
