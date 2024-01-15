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
import CardPage from "./views/CardPage.vue";
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

/*interface CardObject {
  title: string;
  content: string;
  deleted: boolean;
}

export default defineComponent({
  components: {
    CardPage,
    MainPage,
    FormPage
  },
  data() {
    const cards: CardObject[] = [
      { title: "Cavgd 1", content: "Content of Card 1", deleted: true },
      { title: "Chfa 3", content: "Content of Card 2", deleted: false },
      { title: "Cardd 6", content: "Content of Card 2", deleted: false },
      { title: "Cddsaas 8", content: "Content of Card 2", deleted: false },
      { title: "Card 9", content: "Content of Card 2", deleted: false },
      // Add as many cards as you need to this array
    ];

    return {
      cards,
      sortOrderAsc: false
    };
  },
  methods: {
    sortCards(name: string): CardObject[] {
      console.log(name);
      const newList = this.sortOrderAsc
          ? this.cards.sort((a, b) => a.title.localeCompare(b.title))
          : this.cards.sort((a, b) => b.title.localeCompare(a.title));
      this.sortOrderAsc = !this.sortOrderAsc;
      return newList;
    },
  }
});*/
</script>

<style>
body {

}
</style>
