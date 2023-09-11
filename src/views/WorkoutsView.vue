<template>
  <div class="workouts-page">
    <div class="container">
      <h1 class="text-white">Workouts</h1>
    </div>

    <!-- Prikaz svih tema iz temas[] -->
    <div class="container">
      <h2 class="text-white">Sve teme:</h2>
      <div class="row">
        <div class="col-md-4" v-for="tema in temas" :key="tema.id">
          <div class="card mb-4">
            <div class="card-body">
              <h3 class="card-title">{{ tema.title }}</h3>
              <p class="card-text">{{ tema.description }}</p>
              <small class="text-muted">{{
                new Date(tema.time).toLocaleString()
              }}</small>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container mt-4">
      <div class="row">
        <div class="col-md-12">
          <button
            @click="showAddWorkoutForm"
            class="btn btn-danger float-right"
          >
            Dodaj Workout
          </button>
        </div>
      </div>
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


<!-- ostatak koda ostaje nepromijenjen -->


<style scoped>
.workouts-page {
  background-color: red;
  color: black;
  min-height: 100vh;
  padding: 20px;
}

.card-title {
  font-size: 1.25rem; /* Podesite veličinu fonta za naslov */
}

.card-text {
  font-size: 1rem; /* Podesite veličinu fonta za tekst */
}
</style>


<script>
import { db, firebase } from "@/firebase";

export default {
  data() {
    return {
      temas: [], // Inicijalno prazno polje
      showForm: false,
      newWorkoutTitle: "",
      newWorkoutDescription: "",
    };
  },

  mounted() {
    this.getPosts();
  },

  methods: {
    getPosts() {
      console.log("firebase dohvat");
      db.collection("posts")
        .get()
        .then((query) => {
          this.temas = [];
          query.forEach((doc) => {
            console.log("ID:", doc.id);
            const data = doc.data();
            this.temas.push({
              id: doc.id,
              time: data.posted_at,
              description: data.desc,
              temanaziv: data.temaposta,
              url: data.url,
            });
          });
        });
    },

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
