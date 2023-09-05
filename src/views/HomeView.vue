<template>
  <div class="homepage" style="background-color: red">
    <div id="image-container" style="text-align: center; margin-bottom: 20px">
      <img src="@/assets/pngegg.png" alt="" />
    </div>
    <div class="container">
      <div class="row">
        <div class="col"></div>
        <div class="col-sm-6">
          <div class="d-flex justify-content-center align-items-center h-100">
            <div class="options">
              <!-- Dodajte router link za Gym Istra -->
              <router-link to="/gym_istra">
                <button
                  type="button"
                  class="btn btn-primary btn-lg btn-block option"
                >
                  Gym Istra
                </button>
              </router-link>
              <!-- Dodajte router link za Workouts -->
              <router-link to="/workouts">
                <button
                  type="button"
                  class="btn btn-secondary btn-lg btn-block option"
                >
                  Workouts
                </button>
              </router-link>
              <!-- Dodajte router link za Meal Plans -->
              <router-link to="/mealplans">
                <button
                  type="button"
                  class="btn btn-secondary btn-lg btn-block option"
                >
                  Meal Plans
                </button>
              </router-link>
            </div>
          </div>
        </div>
        <div class="col"></div>
      </div>
    </div>
  </div>
</template>
