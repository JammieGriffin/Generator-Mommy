<script setup>
import { useStore } from "../store/index";
const store = useStore();
store.$state.field = "Generator Mommy";
</script>
<template>
  <div class="container">
    <h1>{{ store.$state.field }}</h1>
  </div>
</template>
<style scoped lang="scss">
.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
