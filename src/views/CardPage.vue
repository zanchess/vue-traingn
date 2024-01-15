<!-- CardPage.vue -->
<template>
  <div  class="card-page">
    Card Page
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      message: ""
    };
  },
  mounted() {
    console.log("Card page mounted");
  },
});
</script>

<style scoped>
/* You can add styles for your card here */
</style>
