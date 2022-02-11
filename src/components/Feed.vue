<script>
import axios from "axios";
import NavBar from './NavBar.vue'
import PostLecture from "./PostLecture.vue"
import Search from "./Serach.vue"
<<<<<<< HEAD
import ProfilUser from "./ProfilUser.vue"
=======

>>>>>>> 7df493fcdf377eba6e1fa2c8f7c4b3cc87a6a1df
export default {
  
  components: {
    NavBar,
    PostLecture,
    Search
  },
  data() {
    return {
      posts: [],
      allposts:[],
      index:'',
      value:'',
      profil:{},
    };
  },
  mounted() {
    axios.get("http://localhost:3001/api/items/homePosts").then((response) => {
      this.posts = response.data;
      this.allposts=response.data
      console.log(this.posts);
      // location.reload();
      // localStorage.setItem("posts", JSON.stringify(this.posts));
    });
  },
  methods: {
    change(e){
      this.index=e.target.value
      console.log(this.index);
      axios.get(`http://localhost:3001/api/items/homePosts/${this.index}`)
      .then(res=>{
        this.posts=res.data
        console.log(this.posts)})
    },
    onchange(e) {
      this.value = e.target.value;
      console.log(this.value);
    },
    search() {
      var newArray=[]
      this.posts=[]
        for(var i=0;i<this.allposts.length;i++){ 
          if(this.allposts[i].firstName.includes(this.value)||this.allposts[i].label_type.includes(this.value)||this.allposts[i].lastName.includes(this.value)){
            newArray.push(this.allposts[i])
          }  
        }
        this.posts=newArray;
    },
    savePerson(id){
      axios.get(`http://localhost:3001/api/items/user/${id}`).then(res=>{
        this.profil=res.data                    
        this.profil.user_id=id
        console.log(this.profil);                       
        localStorage.setItem("profil", JSON.stringify(this.profil));
        localStorage.setItem("key",1)
      })
    }
  },
};
</script>

<template>
<Search :change="change" :onchange="onchange" :search="search"/>
<PostLecture/>

  <div class="parent">
    <div class="Lecture" v-for="elem in this.posts" :key="elem">
      <img :src="elem.image_post" style="width: 100%" />
      <h1>{{ elem.title }}</h1>
      <a href="/Profil" @click="savePerson(elem.id_user)">{{ elem.firstName }} {{ elem.lastName }}</a>
      <p>{{ elem.description }}</p>
      <h3>{{ elem.label_type }}</h3>
      <img style="width: 10%" :src="elem.image_type" />

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
  left: 7cm;
  position: absolute;
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