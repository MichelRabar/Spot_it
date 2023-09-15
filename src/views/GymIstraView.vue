<template>
  <div class="gym-istra-page" style="background-color: red">
    <div class="container">
      <div class="row">
        <div class="col-md-12 text-center">
          <!-- Teretana i komentari jedan ispod drugog -->
          <div class="gym-card">
            <div class="gym-details">
              <h2>Elite-Gym Žminj</h2>
              <div class="gym-image">
                <img
                  src="@/assets/2023-06-19.png"
                  alt="Gym"
                  class="img-fluid gym-image-small"
                />
              </div>
            </div>
            <div class="comment-form">
              <button @click="showAddCommentForm" class="btn btn-primary">
                Dodaj komentar
              </button>
              <div v-if="showCommentForm" class="comment-input">
                <textarea
                  v-model="newCommentText"
                  placeholder="Unesite svoj komentar"
                ></textarea>
                <button @click="addComment" class="btn btn-primary">
                  Spremi komentar
                </button>
              </div>
            </div>
          </div>
          <!-- Prikaz komentara ispod slike teretane -->
          <div class="comments">
            <h3>Komentari:</h3>
            <ul>
              <li
                v-for="(comment, commentIndex) in comments"
                :key="commentIndex"
                class="comment-item"
              >
                <div class="comment-details">
                  <strong>{{ comment.email }}</strong>
                  <p>{{ comment.text }}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.gym-istra-page {
  background-color: red;
  min-height: 100vh;
}

.gym-card {
  border: 0.5px solid #ccc;
  padding: 5px;
  margin-bottom: 20px;
  text-align: center;
  background-color: #f5f5f5;
}

.gym-image-small {
  max-width: 200px;
  height: auto;
  margin-top: 20px;
}

.comments {
  padding: 10px;
  margin-top: 10px;
  border: 1px solid #ccc;
  background-color: #f5f5f5;
}

.comment-item {
  list-style-type: none;
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
}

.comment-details {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>
<script>
import { db, firebase } from "@/firebase";

export default {
  data() {
    return {
      comments: [],
      showCommentForm: false,
      newCommentText: "",
    };
  },

  mounted() {
    this.getComments();
  },

  methods: {
    getComments() {
      console.log("Dohvati komentare iz Firebasea");
      db.collection("comments")
        .get()
        .then((querySnapshot) => {
          this.comments = [];
          querySnapshot.forEach((doc) => {
            console.log("ID komentara:", doc.id);
            const commentData = doc.data();
            this.comments.push({
              id: doc.id,
              text: commentData.text,
              email: commentData.email,
              posted_at: commentData.createdAt,
            });
          });
        })
        .catch((error) => {
          console.error("Greška prilikom dohvaćanja komentara: ", error);
        });
    },

    showAddCommentForm() {
      this.showCommentForm = true;
    },

    addComment() {
      console.log("Novi komentar:", this.newCommentText);

      const commentText = this.newCommentText;
      this.showCommentForm = false;

      const user = firebase.auth().currentUser;

      if (user) {
        db.collection("comments")
          .add({
            text: commentText,
            email: user.email,
            createdAt: new Date(),
          })
          .then((doc) => {
            console.log("Komentar uspješno spremljen s ID-om: ", doc.id);
          })
          .catch((error) => {
            console.error("Greška prilikom spremanja komentara: ", error);
          });
      } else {
        console.error("Korisnik nije prijavljen");
      }
    },
  },
};
</script>
