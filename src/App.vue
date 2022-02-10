<script>
import Signup from './components/signup.vue'
</script>


<template>
  <div className="center"></div>

  <ul>
    <li>
      <a > <router-link to="/Feed"> Feed </router-link> </a>
    </li>
    <li>
      <a> <router-link to="/Post"> Post </router-link> </a>
    </li>
    <li>
      <a> <router-link to="/Signin"> Signin </router-link> </a>
    </li>
    <li>
      <a> <router-link to="/Signup"> Signup </router-link> </a>
    </li>
    <li>
      <a> <router-link to="/AboutUs"> AboutUs </router-link> </a>
    </li>
  </ul>

  <router-view />
</template>

<style>
/* body {
  font-size: 28px;
} */
.center {
  text-align: center;
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
</style>