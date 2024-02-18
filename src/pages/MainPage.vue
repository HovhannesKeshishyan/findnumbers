<template>
  <div class="game-table">
    <GameSection/>
  </div>
</template>

<script>
import GameSection from "../components/game-section/GameSection.vue";

export default {
  name: "MainPage",
  components: {GameSection}
}
</script>

<style scoped lang="scss">
.game-table {
  margin: 5rem auto;
  box-shadow: 0 0 2px 2px #03A9F4;
  border-radius: 1rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  max-width: 700px;

  @media only screen and (max-width: 800px) {
    margin: 5rem;
  }
}
</style>