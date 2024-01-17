import { defineStore } from 'pinia'


export const usePostStore = defineStore('postStore', {
    state: () => ({
     posts: [],
     isLoading: false
    }),
    actions: {
        async fetchPosts() {
            try {
                this.isLoading = true;
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                this.posts = await response.json();
                this.isLoading = false;
            } catch (error) {
                console.log(`error`);
                this.isLoading = false;
            }

        }
    },
    getters: {
        getPosts: (state) => state.posts,
    },
})