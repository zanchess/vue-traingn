<!-- CardPage.vue -->
<template>
  <form class="form">
    <input type="text" class="form" v-model="message" name="account" id="form__account">
  </form>
  <p>Введённое сообщение: {{ message }}</p>
  <slot></slot>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  data() {
    return {
      message: ""
    };
  }
});
</script>

<style scoped>
/* You can add styles for your card here */
.form {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  border-radius: 4px;
}
</style>
