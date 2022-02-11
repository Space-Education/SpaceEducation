<script>
import axios from "axios";

export default {
  props: ["change", "onchange", "search"],
  data() {
    return {
      datatype: [],
      input: "",
      posts: [],
    };
  },
  mounted() {
    axios.get("http://localhost:3001/api/items/type").then((response) => {
      this.datatype = response.data;
      console.log(this.datatype);
    });

    axios.get("http://localhost:3001/api/items/homePosts").then((response) => {
      this.posts = response.data;
      console.log(this.posts);
      // location.reload();
      // localStorage.setItem("posts", JSON.stringify(this.posts));
    });
  },
  methods: {},
};
</script>
<template>
  <div class=search>
    <label>categories</label>
    <select name="id_type" @input="change">
      <option value="">select type of lecture</option>

      <option v-for="elem in this.datatype" :key="elem" :value="elem.id_type">
        {{ elem.label_type }}
      </option>
    </select>
    <label>search</label>
    <input type="text" @input="onchange" name="search" />
    <button @click="search">Search</button>
  </div>
</template>
<style scoped>
.search{
    position:relative;
    right: -800px;
}
</style>