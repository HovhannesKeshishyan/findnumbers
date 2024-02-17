<template>
  <GameSection @loading-change="$emit('loading-change')" @on-error="$emit('on-error')"/>
</template>

<script>
import GameSection from "../components/game-section/GameSection.vue";

export default {
  name: "MainPage",
  components: {GameSection}
}
</script>