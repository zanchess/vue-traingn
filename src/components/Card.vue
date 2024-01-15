<!-- CardPage.vue -->
<template>
  <div  class="card" v-if="!deleted">
    <!-- Place the content of your card here -->
    <h2>{{ title }}</h2>
    <p>{{ content }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    title: String,
    content: String,
    deleted: Boolean
  },
  mounted() {
    console.log("Props:", this.title, this.content, this.deleted);
  },
});
</script>

<style scoped>
/* You can add styles for your card here */
.card {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  background-color: #e0e0ff;
  border-radius: 4px;
}
</style>
