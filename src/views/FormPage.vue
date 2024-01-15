<!-- CardPage.vue -->
<template>
  <div  class="form-page">
    <Form>slot</Form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Form from "../components/Form.vue";

export default defineComponent({
  components: {Form},
  data() {
    return {
      message: ""
    };
  },
  mounted() {
    console.log("Form page mounted");
  },
});
</script>

<style scoped>
/* You can add styles for your card here */
</style>
