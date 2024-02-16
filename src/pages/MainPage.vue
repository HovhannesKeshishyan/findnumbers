<template>
  <div class="main-page">
    <TheHeader/>
    <GameSection/>
    <TheFooter/>
  </div>
</template>

<script>
import TheHeader from "../components/TheHeeader.vue";
import GameSection from "../components/game-section/GameSection.vue";
import TheFooter from "../components/TheFooter.vue";

export default {
  name: "MainPage",
  components: {GameSection, TheFooter, TheHeader}
}
</script>

<style scoped lang="scss">
.main-page {
  margin: 5rem;
  box-shadow: 0 0 2px 2px #03A9F4;
  border-radius: 1rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  max-width: 700px;
  width: 100%;
}
</style>