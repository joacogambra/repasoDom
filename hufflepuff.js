const contenedor = document.getElementById('contenedor')
const personajesHufflepuff = filtrarPersonajes( data , 'Hufflepuff' )


for( let personaje of personajesHufflepuff ){
    imprimirTarjeta(personaje,contenedor)
}

// funciones

function filtrarPersonajes(array,casa){
    let aux = []
    for(let i = 0; i < array.length; i++){
        if( array[i].house === casa ){
            aux.push(array[i])
        }
    }
    return aux
}

function imprimirTarjeta(personaje,elemento){
    elemento.innerHTML += ` 
        <div class="card" style="width: 18rem;">
            <img src="${personaje.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${personaje.name}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    ` 
}