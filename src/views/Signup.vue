<template>
  <div class="signup" style="background-color: red">
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
                <label for="exampleInputEmail">Email</label>
                <input
                  type="email"
                  v-model="email"
                  class="form-control"
                  id="exampleInputEmail"
                  placeholder="Enter your email"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword">Password</label>
                <input
                  type="password"
                  v-model="password"
                  class="form-control"
                  id="exampleInputPassword"
                  placeholder="Password"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputConfirmPassword"
                  >Confirm Password</label
                >
                <input
                  type="password"
                  v-model="passwordRepeat"
                  class="form-control"
                  id="exampleInputConfirmPassword"
                  placeholder="Confirm Password"
                />
              </div>
              <div
                class="alert alert-danger"
                v-if="password !== passwordRepeat"
              >
                Passwords do not match.
              </div>
              <button type="button" @click="signup" class="btn btn-primary">
                Register
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
  name: "Signup",
  data() {
    return {
      email: "",
      password: "",
      passwordRepeat: "",
    };
  },
  methods: {
    signup() {
      if (this.password !== this.passwordRepeat) {
        return; // Ako se lozinke ne podudaraju, nećemo izvršiti registraciju
      }

      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
          console.log("Uspješno registriran korisnik");
          this.$router.replace({ name: "login" });
        })
        .catch((error) => {
          console.error("Došlo je do greške pri registraciji", error);
        });
    },
  },
};
</script>
