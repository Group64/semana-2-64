<template>
  <div id="app" class="container mt-5">
        <!-- <api-pokemon></api-pokemon> -->

    <h5>rockeros</h5> 
    <div class="container-fluid" id="Rockeros">
        <div class="row mt-md-5 mt-sm-5 mt-xs-5">
            <div class="col-lg-6 col-xs-12">
                <div class="d-flex justify-content-center align-items-center">
                    <div class="d-flex justify-content-center p-2" style="width: 25rem;">
                        <img src="" class="card-img-top" alt="pokemon_1" id="imagen-rockero-1"
                            style="filter: grayscale();">
                    </div>
                    <div class="p-2">
                        <p class="card-text">Su habilidad de <span id="habilidad-1"></span> le permite ser el mejor
                            baterista del mundo.</p>
                    </div>
                </div>
                <div class="d-flex container-fluid justify-content-end pb-2 mt-n2">
                    <a class="btn btn-outline-info" v-on:click="consultarPokemonUnico(1)" target="_blank"
                        role="button" id="nombre-rockero-1">Info</a>
                </div>
            </div>
            <div class="col-lg-6 col-xs-12">
                <div class="d-flex justify-content-center align-items-center">
                    <div class="d-flex justify-content-center p-2" style="width: 25rem;">
                        <img src="" class="card-img-top" alt="pokemon_2" id="imagen-rockero-2"
                            style="filter: grayscale();">
                    </div>
                    <div class="p-2">
                        <p class="card-text">Es conocido por <span id="habilidad-2"></span> convirtiendolo en un
                            reconocido showPokemon..</p>
                    </div>
                </div>
                <div class="d-flex container-fluid justify-content-end pb-2 mt-n2">
                    <a class="btn btn-outline-info" v-on:click="consultarPokemonUnico(2)" target="_blank"
                        role="button" id="nombre-rockero-2">Info</a>
                </div>
            </div>
            <div class="w-100"></div>
            <div class="col-lg-6 col-xs-12">
                <div class="d-flex justify-content-center align-items-center">

                    <div class="d-flex justify-content-center p-2" style="width: 25rem;">
                        <img src="" class="card-img-top" alt="pokemon_3" id="imagen-rockero-3"
                            style="filter: grayscale();">
                    </div>
                    <div class="p-2">
                        <p class="card-text">Recuerdad que tiene la habilidad de <span id="habilidad-3"></span> será
                            tu mejor maestro.</p>
                    </div>
                </div>
                <div class="d-flex container-fluid justify-content-end pb-2 mt-n2">
                    <a class="btn btn-outline-info" v-on:click="consultarPokemonUnico(3)" target="_blank"
                        role="button" id="nombre-rockero-3">Info</a>
                </div>
            </div>
            <div class="col-lg-6 col-xs-12">
                <div class="d-flex justify-content-center align-items-center">

                    <div class="d-flex justify-content-center p-2" style="width: 25rem;">
                        <img src="" class="card-img-top" alt="pokemon_4" id="imagen-rockero-4"
                            style="filter: grayscale();">
                    </div>
                    <div class="p-2">
                        <p class="card-text">El mejor en <span id="habilidad-4"></span>, te compartira su habilidad
                            para que seas el mejor guitarrista.</p>
                    </div>
                </div>
                <div class="d-flex container-fluid justify-content-end pb-2 mt-n2">
                    <a class="btn btn-outline-info" v-on:click="consultarPokemonUnico(4)" target="_blank"
                        role="button" id="nombre-rockero-4">Info</a>
                </div>
            </div>
            <button type="button" class="btn btn-outline-secondary w-100" v-on:click="consultarPokemones">--------
                Libera nuevos maestros del rock --------</button>
        </div>
    </div>

    </div>

</template>

<script>
export default {
  name: 'ApiPokemon',
  data(){

        },
  mounted: function () {
        this.$nextTick(function () {
          // Código que se ejecutará solo después de
          // haber renderizado la vista completa
          this.consultarPokemones()
        })
      },
    methods: {
        consultarPokemones() {
            let primerId = Math.round(Math.random() * 150)
            let segundoId = Math.round(Math.random() * 150)
            let tercerId = Math.round(Math.random() * 150)
            let cuartoId = Math.round(Math.random() * 150)
            console.log(primerId)
            console.log(segundoId)
            this.consultarPokemon(primerId, 1)
            this.consultarPokemon(segundoId, 2)
            this.consultarPokemon(tercerId, 3)
            this.consultarPokemon(cuartoId, 4)
        },
        consultarPokemon(id,  num) {
            try{
            fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(function (response) {
                response.json()
                .then(function (pokemon) {
                    this.crearPokemon(pokemon, num)
                    console.log(pokemon)
                })
            })
            }catch(error){
                console.log('try catch');
				console.log(error);
            }
        },  
        crearPokemon(pokemon, num) {
            //Convertir la data a HTML
        
            let imagen = document.getElementById(`imagen-rockero-${num}`)
            imagen.setAttribute('src', pokemon.sprites.front_default)
        
            let nombre = document.getElementById(`nombre-rockero-${num}`)
            nombre.textContent = pokemon.name
        
            document.getElementById(`habilidad-${num}`).innerHTML = pokemon.abilities[0].ability.name
        },
        consultarPokemonUnico(n) {

            let imagen = document.getElementById(`imagen-rockero-${n}`)
            imagen.setAttribute('src', "https://www.fotoefectos.com/s/5977_pegantina-gratis-pokebola-puedes-pegar-fotos.jpg")
            let nombre = document.getElementById(`nombre-rockero-${n}`)
            nombre.textContent = "!Atrapado¡"
        }
    },
    computed: {
    },
    beforeCreated() {
    },
    created() {
    },
};
</script>


<style scoped>
</style>