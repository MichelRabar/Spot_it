<template>
  <div class="meal-plan-page">
    <div class="container">
      <h1 class="text-white">Meal Plans</h1>
    </div>

    <!-- Prikaz svih planova ishrane iz recepti[] -->
    <div class="container">
      <h2 class="text-white">Obroci i kalorije</h2>
      <div class="row">
        <div class="col-md-4" v-for="plan in recepti" :key="plan.id">
          <div class="card mb-4">
            <div class="card-body">
              <h3 class="card-title">{{ plan.title }}</h3>
              <p class="card-text">{{ plan.description }}</p>
              <p class="card-text">Proteini: {{ plan.proteini }} g</p>
              <p class="card-text">
                Ugljikohidrati: {{ plan.ugljikohidrati }} g
              </p>
              <p class="card-text">Masti: {{ plan.masti }} g</p>
              <p class="card-text">Kalorije: {{ plan.kalorije }} kcal</p>
              <small class="text-muted">{{
                new Date(plan.time).toLocaleString()
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
            @click="showAddMealPlanForm"
            class="btn btn-danger float-right"
          >
            Dodaj Obrok
          </button>
        </div>
      </div>
    </div>

    <div class="container" v-if="showForm">
      <!-- Forma za dodavanje plana ishrane -->
      <form @submit.prevent="addMealPlan" class="form-inline mb-5">
        <div class="form-group">
          <label for="mealPlanTitle">Naslov Obroka</label>
          <input
            v-model="newMealPlanTitle"
            type="text"
            class="form-control ml-2"
            placeholder="Unesite naslov plana"
            id="mealPlanTitle"
            required
          />
        </div>
        <div class="form-group">
          <label for="mealPlanDescription">Opis Obroka</label>
          <input
            v-model="newMealPlanDescription"
            type="text"
            class="form-control ml-2"
            placeholder="Unesite opis plana"
            id="mealPlanDescription"
            required
          />
        </div>
        <div class="form-group">
          <label for="proteini">Proteini (g)</label>
          <input
            v-model="newProteini"
            type="number"
            class="form-control ml-2"
            placeholder="Unesite količinu proteina"
            id="proteini"
            required
          />
        </div>
        <div class="form-group">
          <label for="ugljikohidrati">Ugljikohidrati (g)</label>
          <input
            v-model="newUgljikohidrati"
            type="number"
            class="form-control ml-2"
            placeholder="Unesite količinu ugljikohidrata"
            id="ugljikohidrati"
            required
          />
        </div>
        <div class="form-group">
          <label for="masti">Masti (g)</label>
          <input
            v-model="newMasti"
            type="number"
            class="form-control ml-2"
            placeholder="Unesite količinu masti"
            id="masti"
            required
          />
        </div>
        <div class="form-group">
          <label for="kalorije">Kalorije (kcal)</label>
          <input
            v-model="newKalorije"
            type="number"
            class="form-control ml-2"
            placeholder="Unesite ukupne kalorije"
            id="kalorije"
            required
          />
        </div>
        <button type="submit" class="btn btn-primary ml-2">Dodaj obrok</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.meal-plan-page {
  background-color: red;
  color: black;
  min-height: 100vh;
  padding: 20px;
}

.card-title {
  font-size: 1.25rem;
}

.card-text {
  font-size: 1rem;
}
</style>

<script>
import { db, firebase } from "@/firebase";

export default {
  data() {
    return {
      recepti: [],
      showForm: false,
      newMealPlanTitle: "",
      newMealPlanDescription: "",
      newProteini: null,
      newUgljikohidrati: null,
      newMasti: null,
      newKalorije: null,
    };
  },

  mounted() {
    this.getMealPlans();
  },

  methods: {
    getMealPlans() {
      db.collection("recepti")
        .get()
        .then((query) => {
          this.recepti = [];
          query.forEach((doc) => {
            const data = doc.data();
            this.recepti.push({
              id: doc.id,
              time: data.posted_at,
              title: data.temaposta,
              description: data.desc,
              proteini: data.proteini,
              ugljikohidrati: data.ugljikohidrati,
              masti: data.masti,
              kalorije: data.kalorije,
            });
          });
        });
    },

    showAddMealPlanForm() {
      this.showForm = true;
    },
    addMealPlan() {
      const title = this.newMealPlanTitle;
      const description = this.newMealPlanDescription;
      const proteini = this.newProteini;
      const ugljikohidrati = this.newUgljikohidrati;
      const masti = this.newMasti;
      const kalorije = this.newKalorije;

      const user = firebase.auth().currentUser;

      if (user) {
        db.collection("recepti")
          .add({
            temaposta: title,
            desc: description,
            proteini: proteini,
            ugljikohidrati: ugljikohidrati,
            masti: masti,
            kalorije: kalorije,
            email: user.email,
            posted_at: Date.now(),
          })
          .then((doc) => {
            console.log("Obrok spremljen", doc);

            this.getMealPlans();

            this.showForm = false;
            this.newMealPlanTitle = "";
            this.newMealPlanDescription = "";
            this.newProteini = null;
            this.newUgljikohidrati = null;
            this.newMasti = null;
            this.newKalorije = null;
          })
          .catch((e) => {
            console.error(e);
          });
      } else {
        console.error("Korisnik nije prijavljen");
      }
    },
  },
};
</script>
