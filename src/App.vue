<template>
  <div id="app">
    <!-- Image and text -->
    <nav id="nav" class="navbar navbar-light bg-light">
      <a class="navbar-brand" href="#">
        <img
          src="@/assets/pngegg.png"
          width="30"
          height="30"
          class="d-inline-block align-top"
          alt=""
        />
        SPOT-IT
      </a>

      <router-link to="/Kontakt" class="nav-link">Kontakt</router-link>

      <!-- Prijava i registracija će se prikazivati samo ako korisnik nije ulogiran -->
      <router-link v-if="!loggedIn" to="/login">Prijava</router-link>
      <router-link v-if="!loggedIn" to="/signup">Registracija</router-link>

      <!-- Ime korisnika i opcija za odjavu će se prikazivati samo ako je korisnik ulogiran -->
      <div v-if="loggedIn">
        <span>{{ currentUser }}</span>
        <a href="#" @click="logout" class="nav-link">Logout</a>
        <router-link to="/">Home</router-link>
      </div>
    </nav>
  </div>
  <router-view />
</template>

<!-- Vaš preostali CSS i JavaScript ostaje nepromijenjen. -->




<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
<script>
import { firebase } from "@/firebase";

export default {
  name: "app",
  data() {
    return {
      currentUser: null,
    };
  },

  computed: {
    loggedIn() {
      // Koristimo ovo jer mi ne radi current.user od storagea
      return !!this.currentUser;
    },
  },

  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push("/login"); // Preusmjerite na stranicu za prijavu nakon odjave
        });
    },
  },

  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // Korisnik je ulogiran
        console.log("***", user.email);
        this.currentUser = user.email;
      } else {
        // Korisnik nije ulogiran
        console.log("***", "nema nikog");
        this.currentUser = null;
      }
    });
  },
};
</script>

