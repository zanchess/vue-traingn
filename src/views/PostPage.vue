<template>
  <div v-if="isLoading" :class="{ 'centered-spinner': isLoading }">
    <atom-spinner v-if="isLoading" :animation-duration="1000" :size="60" color="#747bff" />
  </div>
  <div v-else class="post-page">
    <Post v-for="post in posts"
          :key="post.id" :post="post"
          :title="post.title"
          :body="post.body"
          :user-id="post.userId"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { usePostStore } from '../stores/postStore.ts';
import Post from '../components/Post.vue';
import { AtomSpinner } from 'epic-spinners';

const postStore = usePostStore();

const posts = computed(() => postStore.posts);
const isLoading = computed(() => postStore.isLoading);

onMounted(() => {
  postStore.fetchPosts();
});
</script>

<style scoped>
.post-page {
  margin: 20px;
}

.centered-spinner {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
</style>