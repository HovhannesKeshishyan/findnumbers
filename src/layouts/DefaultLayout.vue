<template>
  <div class="default-layout">
    <TheHeader/>

    <slot></slot>

    <TheFooter/>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeeader.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
  name: "DefaultLayout",
  components: {TheFooter, TheHeader}
}
</script>

<style scoped lang="scss">
.default-layout {
  max-width: 1920px;
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>