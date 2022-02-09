<script>
</script>


<template>
  <NavBar />
  <div>
    Space Education
    <router-link to="/Feed"> Feed </router-link>
    <router-link to="/Post"> Post </router-link>
    <router-link to="/Signin"> Signin </router-link>
    <router-link to="/Signup"> Signup </router-link>
    <router-link to="/AboutUs"> AboutUs </router-link>
  </div>
  <router-view/>
</template>