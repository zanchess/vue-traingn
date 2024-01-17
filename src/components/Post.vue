<template>
  <div class="post">
    <h2>{{ title }}</h2>
    <p>{{ body }}</p>
  </div>
</template>

<script setup lang="ts">
import { defineProps, onMounted } from 'vue';

interface PostProps {
  title: string;
  body: string;
  isLoading: boolean;
}

const { title, body, isLoading } = defineProps({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  isLoading: {
    type: Boolean,
    required: true
  }
});

onMounted(() => {
  console.log('Props:', title, body, isLoading);
});
</script>

<style scoped>
.post {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  background-color: #e0e0ff;
  border-radius: 4px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.post:hover {
  transform: scale(1.02);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
</style>