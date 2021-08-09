<template>
  <div class="library-component">
    <button @click="count--">-</button>
    {{ count }}
    <button @click="count++">+</button>
    <div>
      <slot>Default slot</slot>
    </div>
  </div>
</template>

<script>
export default {
  // components: {},
  // props: {},
  data() {
    return {
      count: 0,
    };
  },
  // computed: {},
  // watch: {},
  // methods: {},
  // created() {},
  // mounted() {}
};
</script>

<style lang="scss">
.library-component {
  font-size: 18px + 1px;
}
</style>
