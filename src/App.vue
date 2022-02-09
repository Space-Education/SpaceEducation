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
  <NavBar />
  <div>
    Space Education
    <router-link to="/Feed" @click="getPostHome">Feed</router-link>
    <router-link to="/Post" @click="getType">Post</router-link>
    <router-link to="/Signin">Signin</router-link>
    <router-link to="/Signup">Signup</router-link>
    <router-link to="/AboutUs">AboutUs</router-link>
  </div>
  <router-view />
</template>
