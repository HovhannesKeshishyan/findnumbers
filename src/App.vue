<template>
  <BaseLoader v-if="is_loading"/>
  <div v-show="!is_loading" class="app-container">
    <TheHeader/>
    <MainPage @loading-change="handleLoadingChange"/>
    <TheFooter/>
  </div>
</template>

<script>
import BaseLoader from "./utils/BaseLoader.vue";
import MainPage from "./pages/MainPage.vue";
import TheHeader from "./components/TheHeeader.vue";
import TheFooter from "./components/TheFooter.vue";

export default {
  name: "App",
  components: {TheFooter, TheHeader, BaseLoader, MainPage},

  data() {
    return {
      is_loading: false
    }
  },

  methods: {
    handleLoadingChange(is_loading) {
      this.is_loading = is_loading;
    }
  }
}
</script>

<style scoped lang="scss">
.app-container {
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
