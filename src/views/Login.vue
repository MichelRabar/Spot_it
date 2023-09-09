<template>
  <div class="login" style="background-color: red">
    <div id="image-container" style="text-align: center">
      <img src="@/assets/pngegg.png" alt="" />
    </div>
    <div class="container">
      <div class="row">
        <div class="col-sm"></div>
        <div class="col-sm">
          <div
            style="
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100%;
            "
          >
            <form>
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  v-model="username"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  v-model="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>

              <button type="button" @click="login" class="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
        <div class="col-sm"></div>
      </div>
    </div>
  </div>
</template>
<script>
import { firebase } from "@/firebase";

export default {
  name: "login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      console.log("login..." + this.username);

      firebase
        .auth()
        .signInWithEmailAndPassword(this.username, this.password)
        .then((result) => {
          console.log("Uspješna prijava", result);
          this.$router.replace({ name: "home" });
        })
        .catch(function (e) {
          console.error("Došlo je do greške", e);
        });
    },
  },
};
</script>