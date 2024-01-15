<!-- PostPage.vue -->
<template>
  <header class="header">
    <h1 class="logo">
      VUE
    </h1>
    <div class="header__nav">
      <router-link v-bind:class="{ 'active': $route.path === '/' }" to="/">Main</router-link>
      <router-link v-bind:class="{ 'active': $route.path === '/card' }" to="/card">Card</router-link>
      <router-link v-bind:class="{ 'active': $route.path === '/form' }" to="/form">Form</router-link>
    </div>
  </header>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  data() {
    return {
    };
  }
});
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  background-color: #3d3d3d;
}

.header > .header__nav{
  margin-right: 60px;
}

.header__nav > a{
  margin-right: 20px;
  font-size: 25px ;
}

.header__nav > a:hover{
  color: #e0e0ff;
  transition: color 0.4s ease-in-out;
}

.header > .logo{
  color: #e0e0ff;
  margin-left: 40px;
}

.active{
  color: #e0e0ff;
}
</style>
