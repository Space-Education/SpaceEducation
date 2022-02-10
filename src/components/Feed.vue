<script>
import axios from 'axios'
export default {
  data() {
    return {
      
      posts: JSON.parse(localStorage.getItem('posts')),
    }
  },
  methods: {
    } 
  }

</script>

<template>
  <div class="parent">
    <div class="Lecture" v-for="elem in this.posts" :key="elem">
      <img :src="elem.image_post"  style="width:100%" />
      <h1>{{ elem.title }}</h1>
      <h2>{{ elem.firstName }} {{ elem.lastName }} </h2>
      <p>{{elem.description}}</p>
      <h3>{{elem.label_type}}</h3>
      <img style="width:10%" :src="elem.image_type"/>
      
      <p>
        <button>Contact</button>
      </p>
    </div>
  </div>
      

</template>
<style scoped>
.Lecture {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: auto;
  text-align: center;
  font-family: arial;
  align-items: start;
  align-self: start;
}
.parent {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 3px;
  grid-row-gap: 0px;
}

.title {
  color: grey;
  font-size: 18px;
}

button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
}

a {
  text-decoration: none;
  font-size: 22px;
  color: black;
}

button:hover,
a:hover {
  opacity: 0.7;
}
</style>