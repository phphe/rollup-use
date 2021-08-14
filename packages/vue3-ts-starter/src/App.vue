<template>
  <div>
    <h1>{{ hello }}</h1>
    <LibraryComponent :initialCount="9" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ComponentPublicInstance } from "vue";
import LibraryComponent from "./components/LibraryComponent.vue";

export default defineComponent({
  components: {
    LibraryComponent,
  },
  data() {
    return {
      hello: "Hello World!",
    };
  },
});
</script>

<style lang="scss"></style>
