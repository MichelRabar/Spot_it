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
                <label for="exampleInputeMail">email</label>
                <input
                  type="text"
                  v-model="username"
                  class="form-control"
                  id="exampleInputName"
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
                  v-model="passwordrepeat"
                  class="form-control"
                  id="exampleInputConfirmPassword"
                  placeholder="Confirm Password"
                />
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
      username: "",
      password: "",
      passwordrepeat: "",
    };
  },
  methods: {
    signup() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.username, this.password)
        .then(function () {
          console.log("uspjehn");
        })
        .catch(function (error) {
          console.error("Doslo do greske", error);
        });
      console.log("nastavak");
    },
  },
};
</script>

