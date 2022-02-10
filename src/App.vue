<script>
import axios from "axios";

export default {
  data() {
    return {
      urlgetpost: "http://localhost:3001/api/items/homePosts",
      urlgettype: "http://localhost:3001/api/items/type",
      posts: [],
    };
  },
  methods: {
    getType() {
      axios.get("http://localhost:3001/api/items/type").then((response) => {
        this.type = response.data;
        console.log(this.type);
        localStorage.setItem("type", JSON.stringify(this.type));
      });
    },
    getPostHome: function () {
      axios
        .get("http://localhost:3001/api/items/homePosts")
        .then((response) => {
          this.posts = response.data;
          console.log(this.posts);
          // location.reload();
          localStorage.setItem("posts", JSON.stringify(this.posts));
        });
    },
  },
};
</script>



<template>
  <div>
    <ul>
      <div className="centerReste">
        <li>
          <a> <router-link to="/Feed"  @click="getPostHome"> Feed </router-link> </a>
        </li>
        <li>
          <a> <router-link to="/Post"  @click="getType"> Post </router-link> </a>
        </li>
        <li>
          <a> <router-link to="/AboutUs"> AboutUs </router-link> </a>
        </li>
      </div>
      <div className="center">
        <li>
          <a> <router-link to="/Signin"> Signin </router-link> </a>
        </li>
        <li>
          <a> <router-link to="/Signup"> Signup </router-link> </a>
        </li>
      </div>
    </ul>
  </div>
  <router-view />
  
  <div>
    <div class="sidenav">
      <div class="plus">
        <i><font-awesome-icon icon="fa-solid fa-plus" /></i>
        <h1>Post new lecture</h1>
      </div>
      <a>Categories</a>
      <a>Javascipt</a>
      <a>Francais</a>
      <a>English</a>
    </div>
  </div>
  
</template>

<style>
/* body {
  font-size: 28px;
} */
.center {
  position: absolute;
  left: 1450px;
}
.centerReste {
  position: left;
  left: 500px;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: rgb(16, 22, 75);
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 8px 16px;
  text-decoration: none;
}

li a:hover {
  background-color: rgb(67, 33, 146);
}

.sidenav {
  height: 100%;
  width: 240px;
  position: fixed;
  z-index: 1;
  top: 30;
  left: 0;
  background-color: rgb(218, 204, 204);
  overflow-x: hidden;
  padding-top: 20px;
}

.sidenav a {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
}

.sidenav a:hover {
  color: #f1f1f1;
}

.main {
  margin-left: 160px; /* Same as the width of the sidenav */
  font-size: 28px; /* Increased text to enable scrolling */
  padding: 0px 10px;
}

@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;
  }
  .sidenav a {
    font-size: 18px;
  }
}
</style>
