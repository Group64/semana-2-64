<template>

            <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="1" class=""></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="2" class=""></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="https://placeimg.com/1200/300/music" class="d-block w-100" alt="cabezera1" style="height: 90%; width: 90%; padding: 15px; filter: grayscale();">
    
    
                    <!-- svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: First slide"><title>Placeholder</title>
                        <rect
                            width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#555" dy=".3em">First slide</text></svg> -->
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Servicios Musicales</h5>
                        <p>|</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="https://placeimg.com/1200/300/tech" class="d-block w-100" alt="cabezera1" style="height: 90%; width: 90%; padding: 15px; filter: grayscale();">
                    <!-- <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Second slide"><title>Placeholder</title>
                        <rect
                            width="100%" height="100%" fill="#666"></rect><text x="50%" y="50%" fill="#444" dy=".3em">Second slide</text></svg> -->
                    <div class="carousel-caption d-none d-md-block">
                        <h5>- Los mejores profesores -</h5>
                        <p>||</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="https://placeimg.com/1200/300/arch" class="d-block w-100" alt="cabezera1" style="height: 90%; width: 90%; padding: 15px; filter: grayscale();">
    <!--                 <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Third slide"><title>Placeholder</title>
                        <rect
                            width="100%" height="100%" fill="#555"></rect><text x="50%" y="50%" fill="#333" dy=".3em">Third slide</text></svg> -->
                    <div class="carousel-caption d-none d-md-block">
                        <h5>¡Fantasticos equipos!</h5>
                        <p>|||</p>
                    </div>
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>

</template>

<script>
export default {
    name: 'ElCarrusel',
}
</script>

<style scoped>

</style>