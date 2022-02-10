<script>
import axios from 'axios'

export default {

  data() {
    return {
      urlgetpost: 'http://localhost:3001/api/items/getdata',
      urlgettype: 'http://localhost:3001/api/items/type',
      posts: [],


    }
  },
  methods: {
    getType() {
      axios.get('http://localhost:3001/api/items/type')
        .then((response) => {
          this.type = response.data
          console.log(this.type);
          localStorage.setItem('type', JSON.stringify(this.type))
        })
    },
    getPostHome: function () {
      axios.get('http://localhost:3001/api/items/getdata')
      .then((response) => {
        this.posts = response.data
        console.log(this.posts);
        location.reload();
         localStorage.setItem('posts', JSON.stringify(this.posts))
      })
     
  }
}
}
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
