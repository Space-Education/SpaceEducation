
<script>
import axios from "axios";
export default {
  data() {
    return {
      user: {},
    };
  },
  methods: {
    change(event) {
      this[event.target.name] = event.target.value;
      console.log(this[event.target.name]);
    },
    add() {
      var option = {
        email: this.email,
        password: this.password,
      };
      console.log(option);
      axios
        .post("http://localhost:3001/api/items/userlogin", option)
        .then((response) => {
          console.log(response);
          localStorage.setItem("user", JSON.stringify(response.data[0]));
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>


<template>
  <div>
    <h1>Email</h1>
    <input name="email" @input="change" />
    <h1>Password</h1>
    <input name="password" @input="change" />
    <button v-on:click="add()">Submit</button>
  </div>
</template>