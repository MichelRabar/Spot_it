<template>
  <div class="workouts-page">
    <div class="container">
      <h1 class="text-white">Workouts</h1>
      <button @click="showAddWorkoutForm" class="btn btn-danger">
        Dodaj Workout
      </button>
    </div>
    <div class="container">
      <!-- Dodajte sadržaj treninga ovde -->
    </div>
  </div>
</template>

<style scoped>
.workouts-page {
  background-color: red;
  color: black;
  min-height: 100vh;
  padding: 20px;
}

/* Stilovi za dodatni sadržaj i formu za dodavanje treninga */
</style>

<script>
export default {
  methods: {
    showAddWorkoutForm() {
      // Ovde možete dodati logiku za prikaz forme za dodavanje treninga
      // Možete koristiti stanje (data property) za kontrolu prikaza forme
    },
  },
};
</script>
