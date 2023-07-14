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

      <router-link to="/">Home</router-link>
      <router-link to="/login">Prijava</router-link>
      <router-link to="/signup">Registracija</router-link>
    </nav>
  </div>
  <router-view />
</template>
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
