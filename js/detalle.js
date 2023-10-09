let codigo = location.search;
//console.log(codigo)

let codigoPelicula = new URLSearchParams(codigo);
//console.log(codigoPelicula);

let codigoSeleccionado = codigoPelicula.get('codigo');
//console.log(codigoSeleccionado);

let codigoFinal = document.getElementById('codigo');
let titulo = document.getElementById('titulo');
let año = document.getElementById('año');
let director = document.getElementById('director');
let info = document.getElementById('info')
let duracion = document.getElementById('duracion')
let poster = document.getElementById('poster');
let trailer = document.getElementById('trailer')
//Puedo sumar variables que capturen elementos del json 

let detallePelicula = JSON.parse(localStorage.getItem('infoPelicula'))

let arrayDetalle = JSON.parse(detallePelicula[0]);
//console.log(arrayDetalle);

//codigoFinal.innerHTML = `${codigoSeleccionado}`;
titulo.innerHTML = `${arrayDetalle.titulo}`;
año.innerHTML = `${arrayDetalle.año}`;
director.innerHTML = `${arrayDetalle.director}`
info.innerHTML = `${arrayDetalle.info}`
duracion.innerHTML = `${arrayDetalle.duracion}`
poster.innerHTML = `<img class="posterDetalle" src="${arrayDetalle.poster}" alt="${arrayDetalle.titulo}"/>`;
trailer.innerHTML = `<iframe width="500" height="281" src="${arrayDetalle.trailer}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`

//Puedo sumar variables que capturen elementos del json y pintarlas con .innerHTML

let botonInicio = document.getElementById('botonInicio');
botonInicio.addEventListener('click', function(){
    localStorage.clear()
    })
