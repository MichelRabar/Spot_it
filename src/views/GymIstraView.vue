<template>
  <div class="gym-istra-page" style="background-color: red">
    <div class="container">
      <div class="row">
        <!-- Prva slika teretane s ocjenama -->
        <div class="col-6 col-md-3 text-center">
          <img src="@/assets/pngegg.png" alt="Gym" class="img-fluid" />
          <div class="rating">
            <span class="star">&#9733;</span>
            <span class="star">&#9733;</span>
            <span class="star">&#9733;</span>
            <span class="star">&#9733;</span>
            <span class="star">&#9733;</span>
          </div>
        </div>

        <!-- Druga slika teretane s ocjenama -->
        <div class="col-6 col-md-3 text-center">
          <img src="@/assets/pngegg.png" alt="Gym" class="img-fluid" />
          <div class="rating">
            <span class="star">&#9733;</span>
            <span class="star">&#9733;</span>
            <span class="star">&#9733;</span>
            <span class="star">&#9733;</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Razmak između dviju grupa slika -->
    <div style="height: 20px"></div>

    <!-- Treća slika teretane s ocjenama -->
    <div class="container">
      <div class="row">
        <div class="col-6 col-md-3 text-center">
          <img src="src/assets/2023-06-19.jpg" alt="Gym" class="img-fluid" />
          <div class="rating">
            <span class="star">&#9733;</span>
            <span class="star">&#9733;</span>
            <span class="star">&#9733;</span>
            <span class="star">&#9733;</span>
          </div>
        </div>

        <!-- Četvrta slika teretane s ocjenama -->
        <div class="col-6 col-md-3 text-center">
          <img
            src="src/assets/347416938_813710180459941_6096380632361339768_n.jpg"
            alt="Gym"
            class="img-fluid"
          />
          <div class="rating">
            <span class="star">&#9733;</span>
            <span class="star">&#9733;</span>
            <span class="star">&#9733;</span>
            <span class="star">&#9733;</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.gym-istra-page {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 20px; /* Dodajte razmak oko slika */
}

.rating {
  font-size: 24px;
  margin-top: 10px;
}

.star {
  color: #ffd700; /* Boja za zvjezdicu */
}
/* Dodajte dodatne stilove prema vašim potrebama */
</style>
