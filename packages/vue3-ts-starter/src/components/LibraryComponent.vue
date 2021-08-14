<template>
  <div class="library-component">
    <button @click="reduce()">-</button>
    {{ count }}
    <button @click="plus()">+</button>
    <div>
      <slot>Default slot</slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    initialCount: { type: Number, default: 0 },
    propB: { type: Object as PropType<{ a: number; b: string }> },
  },
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    plus() {
      this.count++;
    },
    reduce() {
      this.count--;
    },
  },
  created() {
    this.count = this.initialCount;
  },
});
</script>

<style lang="scss">
.library-component {
  font-size: 18px + 1px;
}
</style>
