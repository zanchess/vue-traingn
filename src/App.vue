<!-- App.vue -->
<template>
  <div class="app" id="app">
    <Header/>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import FormPage from "./views/FormPage.vue";
import CardPage from "./views/PostPage.vue";
import MainPage from "./views/MainPage.vue";
import Header from "./components/Header.vue";

export default defineComponent({
  components: {
    MainPage,
    CardPage,
    FormPage,
    Header
  },

  data () {
    return {
      app: true
    }
  }
});
</script>

<style>
body {

}
</style>
