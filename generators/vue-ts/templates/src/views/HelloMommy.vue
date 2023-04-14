<script setup lang="ts">
import useStore from "../store";
import {count} from "../hooks/index"
const store = useStore();

store.$state.field = "Generator Mommy Vue-ts";
</script>
<template>
  <div class="container">
    <h1>{{ store.$state.field }}</h1>
    <div>
      <p>
        <button @click="count ++">count:{{count}}</button>
      </p>
    </div>
  </div>
</template>
<style scoped lang="scss">
.container{
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
