<!-- CardPage.vue -->
<template>
  <div  class="form-page">
    Main Page
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
    console.log("Main page mounted");
  },
});
</script>

<style scoped>
/* You can add styles for your card here */
</style>
