<!-- PostPage.vue -->
<template>
  <div  class="card-page">
    <Post
    v-for="post in posts"
    :key="post.id"
    :title="post.title"
    :body="post.body"
    :user-id="post.userId"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { usePostStore } from "../stores/postStore.ts";
import Post from "../components/Post.vue";

export default defineComponent({
  components: {
    Post,
  },
  setup() {
    const postStore = usePostStore();
    const posts = computed(() => postStore.posts);

    return {
      posts,
    };
  },
  mounted() {
    const { fetchPosts } = usePostStore();
    fetchPosts();
  },
});
</script>

<style scoped>
/* You can add styles for your card here */
</style>
