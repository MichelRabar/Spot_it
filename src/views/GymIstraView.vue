<template>
  <div class="gym-istra-page" style="background-color: red">
    <div class="container">
      <div class="row">
        <!-- Prva slika teretane -->
        <div class="col-md-12 text-center">
          <div class="gym-card">
            <a>Elite Gym</a>
            <div class="gym-image">
              <img
                src="@/assets/2023-06-19.png"
                alt="Gym"
                class="img-fluid gym-image"
              />
            </div>
            <button @click="showComment(0)" class="btn btn-primary">
              Dodaj komentar
            </button>
          </div>
          <div v-if="commentsVisible[0]" class="comments"></div>
        </div>

        <!-- Druga slika teretane -->
        <div class="col-md-12 text-center">
          <div class="gym-card">
            <a>Pro Gym</a>
            <div class="gym-image">
              <img
                src="@/assets/347416938_813710180459941_6096380632361339768_n.png"
                alt="Gym"
                class="img-fluid gym-image"
              />
            </div>
            <button @click="showComment(1)" class="btn btn-primary">
              Dodaj komentar
            </button>
          </div>
          <div v-if="commentsVisible[1]" class="comments"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      commentsVisible: [false, false],
    };
  },
  methods: {
    showComment(index) {
      this.commentsVisible[index] = !this.commentsVisible[index];
    },
  },
};
</script>

<style scoped>
.gym-istra-page {
  background-color: red;
  min-height: 100vh;
}

.gym-card {
  border: 1px solid #ccc;
  padding: 20px;
  margin-bottom: 20px;
  text-align: center;
  background-color: #f5f5f5;
}

.gym-image {
  margin: 10px 0;
  max-width: 200px;
  height: auto;
}

.comments {
  padding: 10px;
  margin-top: 10px;
  border: 1px solid #ccc;
  background-color: #f5f5f5;
}
</style>
