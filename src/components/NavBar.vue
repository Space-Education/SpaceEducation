<script>
import axios from "axios";

export default {
  props:["change"],
  data() {
    return {
      datatype: [],
      key:0
    };
  },
  mounted() {
    axios.get("http://localhost:3001/api/items/type").then((response) => {
      this.datatype = response.data;
      console.log(this.datatype);
    });
  },
  methods: {
    changeKey(){
      localStorage.setItem('key',this.key)
      location.reload();
    },
    logout(){
      localStorage.removeItem("user")
      localStorage.setItem('key',this.key)
      localStorage.removeItem('profil')
    }
  }
};
</script>
<template>
  <div>
    <ul>
      <div className="centerReste">
        <li>
          <a> <router-link to="/"> Home </router-link> </a>
        </li>
        <li>
          <a> <router-link to="/Post"> Post </router-link> </a>
        </li>
        <li>
          <a> <router-link to="/AboutUs"> AboutUs </router-link> </a>
        </li>
        <li>
          <a> <router-link to="/Payment"> Payment </router-link> </a>
        </li>
      </div>
      <div className="center">
        <li>
          <a> <router-link to="/Login"> Login </router-link> </a>
        </li>
        <li>
          <a> <router-link to="/Signup"> Signup </router-link> </a>
        </li>
        <li>
          <a @click="changeKey"> <router-link to="/Profil"> Profil </router-link> </a>
        </li>
        <li>
          <a @click="logout"> <router-link to="/"> Logout </router-link> </a>
        </li>
      </div>
    </ul>
  </div>
  <router-view />
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
  background-color: #002d62;
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
