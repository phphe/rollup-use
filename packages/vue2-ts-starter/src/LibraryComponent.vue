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

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class LibraryComponent extends Vue {
  count = 0;
}
</script>

<style lang="scss">
.library-component {
  font-size: 18px + 1px;
}
</style>
