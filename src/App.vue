<template>
  <h1 v-if="errorData" style="color: #9a1d26">{{ errorData.message }}</h1>
  <BaseLoader v-else-if="isLoading"/>
  <div v-show="!errorData && !isLoading" class="app-container">
    <TheHeader/>
    <MainPage/>
    <TheFooter/>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import BaseLoader from "./utils/BaseLoader.vue";
import MainPage from "./pages/MainPage.vue";
import TheHeader from "./components/TheHeeader.vue";
import TheFooter from "./components/TheFooter.vue";

export default {
  name: "App",
  components: {TheFooter, TheHeader, BaseLoader, MainPage},

  computed: {
    ...mapGetters({
      isLoading: "global/isLoading",
      errorData: "global/errorData"
    })
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
