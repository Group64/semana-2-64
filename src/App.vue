<template>
  <div id="app">

        <div class="container-fluid" id="team">
        <div class="row justify-content-center mb-5">
          <div class="col mt-5" v-for="(item, index) of team" :key="index">
            <team-card v-bind:member="item"></team-card>

          </div>
          </div>
           </div>

    <page-footer></page-footer>
     <!-- <h1>{{title}}</h1>  -->
  </div>
</template>

<script>
import PageFooter from './components/PageFooter.vue';
import TeamCard from './components/TeamCard.vue';

export default {
  name: 'App',
  components: {
    PageFooter,
    TeamCard,
  },
  data(){
    return{
      team: [
{
codigo: 1,
nombre:"Juan Camilo Florez Gomez",
descripcion: "De los mejores bateristas de la ciudad.",
rol: "Desarrollador",
image :"./img/integrante1.jpeg",
},
{
codigo: 2,
nombre:"David Jerónimo García Jaramillo",
descripcion: "Quien te enseñara a cantar las mejores letras.",
rol: "Desarrollador",
image: "./img/integrante2.jpeg",
},
{
codigo: 3,
nombre:"Juan Sebastian Segura Arango",
descripcion: "Nadie como él para manejar los fans.",
rol: "Desarrollador",
image: "./img/integrante3.jpeg",
},
{
codigo: 4,
nombre:"Fabián Mauricio Gamboa Bohórquez",
descripcion: "Sera famoso si permaneces a su lado.",
rol: "Desarrollador",
image: "./img/integrante4.jpg",
},
{
codigo: 5,
nombre:"Danilo Andrés García Hansen",
descripcion: "Transmitirá su seguridad para el escenario.",
rol: "Desarrollador",
image: "./img/integrante5.jpeg",
}],
    }
  }
}
</script>

