<script>
export default{
    data(){
        return {
            lecture :[
    {
      name: "Charmander",
      type: "fire",
      image: "https://i2.wp.com/le-carnet-et-les-instants.net/wp-content/uploads/2017/08/lecture.jpg?fit=3008%2C2000"
    },
    {
      name: "Squirtle",
      type: "water",
      image: "https://us.123rf.com/450wm/dogfella/dogfella1908/dogfella190800093/129201755-femme-gros-plan-en-tissu-d%C3%A9contract%C3%A9-tenir-le-vieux-livre-de-poche-%C3%A0-lire.jpg?ver=6"
    },
    {
      name: "Squirtle",
      type: "water",
      image: "https://us.123rf.com/450wm/dogfella/dogfella1908/dogfella190800093/129201755-femme-gros-plan-en-tissu-d%C3%A9contract%C3%A9-tenir-le-vieux-livre-de-poche-%C3%A0-lire.jpg?ver=6"
    },
    {
      name: "Squirtle",
      type: "water",
      image: "https://us.123rf.com/450wm/dogfella/dogfella1908/dogfella190800093/129201755-femme-gros-plan-en-tissu-d%C3%A9contract%C3%A9-tenir-le-vieux-livre-de-poche-%C3%A0-lire.jpg?ver=6"
    },
    {
      name: "Squirtle",
      type: "water",
      image: "https://us.123rf.com/450wm/dogfella/dogfella1908/dogfella190800093/129201755-femme-gros-plan-en-tissu-d%C3%A9contract%C3%A9-tenir-le-vieux-livre-de-poche-%C3%A0-lire.jpg?ver=6"
    },
    {
      name: "Squirtle",
      type: "water",
      image: "https://us.123rf.com/450wm/dogfella/dogfella1908/dogfella190800093/129201755-femme-gros-plan-en-tissu-d%C3%A9contract%C3%A9-tenir-le-vieux-livre-de-poche-%C3%A0-lire.jpg?ver=6"
    }]
        }
    }
    
}




</script>

<template>
<div class="parent">
<div class="Lecture"   v-for="elem in lecture" :key="elem.type">
  <img :src="elem.image" alt="ss" style="width:100%">
  <h1>  {{ elem.name }}</h1>
    <p class="title">Name teacher</p>
    <p>Harvard University</p>
      <p><button>Contact</button></p>
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

button:hover, a:hover {
  opacity: 0.7;
}
</style>
