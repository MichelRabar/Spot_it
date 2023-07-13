<template>
  <div class="registration" style="background-color: red">
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
                <label for="exampleInputName">Full Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputName"
                  placeholder="Enter your full name"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputUsername">Username</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputUsername"
                  placeholder="Enter desired username"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword">Password</label>
                <input
                  type="password"
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
                  class="form-control"
                  id="exampleInputConfirmPassword"
                  placeholder="Confirm Password"
                />
              </div>

              <button type="submit" class="btn btn-primary">Register</button>
            </form>
          </div>
        </div>
        <div class="col-sm"></div>
      </div>
    </div>
  </div>
</template>
