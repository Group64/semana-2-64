let lista = document.getElementById('listaPokemon')

function consultarPokemon(id,  num) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(function (response) {
        response.json()
        .then(function (pokemon) {
            crearPokemon(pokemon, num)
        })
    })
}

function consultarPokemones() {
    let primerId = Math.round(Math.random() * 150)
    let segundoId = Math.round(Math.random() * 150)
    let tercerId = Math.round(Math.random() * 150)
    let cuartoId = Math.round(Math.random() * 150)
    
    consultarPokemon(primerId, 1)
    consultarPokemon(segundoId, 2)
    consultarPokemon(tercerId, 3)
    consultarPokemon(cuartoId, 4)
}


    function crearPokemon(pokemon, num) {
    //Convertir la data a HTML

    let imagen = document.getElementById(`imagen-rockero-${num}`)
    imagen.setAttribute('src', pokemon.sprites.front_default)

    let nombre = document.getElementById(`nombre-rockero-${num}`)
    nombre.textContent = pokemon.name

    numHabilidad = 0;
    let x = numHabilidad.toString()
    let habilidad = document.getElementById(`habilidad-${num}`).innerHTML = pokemon.abilities[0].ability.name
}

function consultarPokemonUnico(n) {

    let imagen = document.getElementById(`imagen-rockero-${n}`)
    imagen.setAttribute('src', "https://www.fotoefectos.com/s/5977_pegantina-gratis-pokebola-puedes-pegar-fotos.jpg")
    let nombre = document.getElementById(`nombre-rockero-${n}`)
    nombre.textContent = "!Atrapado¡"
}




consultarPokemones()