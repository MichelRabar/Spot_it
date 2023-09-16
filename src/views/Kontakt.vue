<template>
  <div class="Kontakt" style="background-color: red">
    <div id="image-container" style="text-align: center; margin-bottom: 20px">
      <img src="@/assets/pngegg.png" alt="" />
    </div>
    <div class="container">
      <div class="row">
        <div class="col"></div>
        <div class="col-sm-6">
          <div class="d-flex justify-content-center align-items-center h-100">
            <div class="options">
              <h1>Kontaktirajte nas</h1>
              <p>
                Ovdje možete pronaći informacije o našoj stranici i kreatoru.
              </p>

              <div class="info-section">
                <div class="section-header">
                  <h2>Informacije o stranici</h2>
                </div>
                <div class="section-content">
                  <p>
                    Ova stranica pruža različite informacije o fitnessu,
                    vježbanju, i prehrani. Ako imate bilo kakvih pitanja ili
                    komentara, slobodno nas kontaktirajte.
                  </p>
                </div>
              </div>

              <div class="info-section">
                <div class="section-header">
                  <h2>Kreator stranice</h2>
                </div>
                <div class="section-content">
                  <p>
                    Ova stranica je stvorena od strane Michela Rabara,
                    strastvenog ljubitelja fitnessa. Ako želite saznati više o
                    meni i mojim radovima, slobodno me kontaktirajte putem
                    Michel.fake@gmail.com.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.Kontakt {
  background-color: red;
  min-height: 100vh;
}

.options {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.info-section {
  background-color: #f5f5f5; /* Dodajte sivu pozadinu ovdje */
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
}

.section-header {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.section-content {
  font-size: 1rem;
}
</style>
