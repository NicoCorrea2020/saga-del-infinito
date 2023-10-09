let peliculasHTML = document.querySelector("#peliculasCaja")
//console.log(peliculasHTML);

fetch ('../datos/peliculas.json')
.then((respuesta)=>{
    return respuesta.json()
})
.then((peliculasMarvel)=>{
    //console.log(peliculasMarvel); //siiii xD
    peliculasMarvel.forEach(pelicula => {
        peliculasHTML.innerHTML += `

        <li class="pelicula">
            <img class="peliculaPoster" src="${pelicula.poster}" alt="${pelicula.poster}">
            <h3 class="tituloPie" >${pelicula.titulo}</h3>
            <h5 class="añoPie" >${pelicula.año}</h5>
            
            <a id='${JSON.stringify(pelicula)}' href= '#' class="botonInfo" ><button>+ INFO</button></a>            
            
        </li>
        
        `
    })

    let botonInfo = document.querySelectorAll('.botonInfo')
    //console.log(botonInfo)
    let arrayMiListaDePeliculas
    //console.log(arrayMiListaDePeliculas);
    let miObjeto
    let codigo

    botonInfo.forEach(peliculaSeleccion => {
        peliculaSeleccion.addEventListener('click', function(e){
            e.preventDefault()
            let miListaDePeliculas = localStorage.getItem('infoPelicula')
            //console.log(miListaDePeliculas)
            if(miListaDePeliculas == null){
                arrayMiListaDePeliculas = [];
            }else{
                arrayMiListaDePeliculas = JSON.parse(miListaDePeliculas)
            }

            arrayMiListaDePeliculas.push(this.id)
            //console.log(arrayMiListaDePeliculas);

            miObjeto = JSON.parse(arrayMiListaDePeliculas[0])
            //console.log(miObjeto);

            codigo = miObjeto.codigo
            //console.log(codigo);

            localStorage.setItem('infoPelicula', JSON.stringify(arrayMiListaDePeliculas))
            //console.log(arrayMiListaDePeliculas);
            
            location.href = `detalle.html?codigo=${codigo}`

        })

    })
           
})