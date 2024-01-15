<!-- PostPage.vue -->
<template>
  <div  class="post">
    <!-- Place the content of your card here -->
    <h2>{{ title }}</h2>
    <p>{{ body }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";


export default defineComponent({
  props: {
    userId: Number,
    title: String,
    body: String,
  },
  mounted() {
    console.log("Props:", this.title, this.content, this.deleted);
  },
});
</script>

<style scoped>
/* You can add styles for your card here */
.post {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  background-color: #e0e0ff;
  border-radius: 4px;
}
</style>
