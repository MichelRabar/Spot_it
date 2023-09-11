<template>
  <div class="workouts-page">
    <div class="container">
      <h1 class="text-white">Workouts</h1>
      <button @click="showAddWorkoutForm" class="btn btn-danger">
        Dodaj Workout
      </button>
    </div>
    <div class="container" v-if="showForm">
      <!-- Forma za dodavanje teme i opisa teme -->
      <form @submit.prevent="addWorkout" class="form-inline mb-5">
        <div class="form-group">
          <label for="workoutTitle">Tema</label>
          <input
            v-model="newWorkoutTitle"
            type="text"
            class="form-control ml-2"
            placeholder="Unesite temu"
            id="workoutTitle"
          />
        </div>
        <div class="form-group">
          <label for="workoutDescription">Opis teme</label>
          <input
            v-model="newWorkoutDescription"
            type="text"
            class="form-control ml-2"
            placeholder="Unesite opis teme"
            id="workoutDescription"
          />
        </div>
        <button type="submit" class="btn btn-primary ml-2">Dodaj temu</button>
      </form>
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
</style>

<script>
import { db, firebase } from "@/firebase";

export default {
  data() {
    return {
      showForm: false,
      newWorkoutTitle: "",
      newWorkoutDescription: "",
    };
  },
  methods: {
    showAddWorkoutForm() {
      this.showForm = true;
    },
    addWorkout() {
      // Ovdje možete dodati logiku za spremanje teme i opisa teme
      // Nakon što se podaci spreme, možete ih resetirati i sakriti formu
      console.log("Nova tema:", this.newWorkoutTitle);
      console.log("Opis nove teme:", this.newWorkoutDescription);

      // Nakon što završite s logikom spremanja, resetirajte i sakrijte formu

      const tema = this.newWorkoutTitle;
      const temaopis = this.newWorkoutDescription;
      this.showForm = false;

      const user = firebase.auth().currentUser;

      if (user) {
        db.collection("posts")
          .add({
            temaposta: tema,
            desc: temaopis,
            email: user.email, // Koristimo user.email za email korisnika
            posted_at: Date.now(),
          })
          .then((doc) => {
            console.log("spremljeno", doc);
          })
          .catch((e) => {
            console.error(e);
          });
      } else {
        console.error("Korisnik nije prijavljen");
        // Ovdje možete dodati logiku za upravljanje situacijom kada korisnik nije prijavljen
      }
    },
  },
};
</script>
