import { defineStore } from 'pinia'


export const usePostStore = defineStore('postStore', {
    state: () => ({
     posts: []
    }),
    actions: {
        async fetchPosts() {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                this.posts = await response.json();
            } catch (error) {
                console.log(`error`);
            }

        }
    },
    getters: {
        getPosts: (state) => state.posts,
    },
})