<template>
    
            
                <div class="card text-white bg-dark">
                    <div class="d-flex justify-content-center p-2">
                    <img v-bind:src='member.image' width="180" height="220" alt="fotoIntegranteEquipo">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">{{member.nombre}}</h5>
                        <p class="card-text">{{member.descripcion}}</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">{{member.rol}}<span> - Código:</span> {{member.codigo}}</small>
                    </div>
                </div>
           
   
</template>

<script>
    export default {
        name: "TeamCard",
        props: ['member']
    }
</script>

<style scoped>

</style>
