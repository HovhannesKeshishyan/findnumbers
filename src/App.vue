<template>
  <h1 v-if="error_message" style="color: #9a1d26">{{ error_message }}</h1>
  <BaseLoader v-else-if="is_loading"/>
  <div v-show="!error_message && !is_loading" class="app-container">
    <TheHeader/>
    <MainPage @loading-change="handleLoadingChange" @on-error="handleError"/>
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
      is_loading: false,
      error_message: null
    }
  },

  methods: {
    handleLoadingChange(is_loading) {
      this.is_loading = is_loading;
    },

    handleError(err) {
      console.log(err)
      this.error_message = err?.message || "Something went wrong";
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
