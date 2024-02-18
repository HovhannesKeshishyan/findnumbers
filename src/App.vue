<template>
  <ErrorModal v-if="errorData" @on-confirm="resetError" :error="errorData"/>
  <BaseLoader v-else-if="isLoading"/>

  <DefaultLayout v-show="!errorData && !isLoading">
    <MainPage/>
  </DefaultLayout>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import MainPage from "./pages/MainPage.vue";
import BaseLoader from "./utils/BaseLoader.vue";
import ErrorModal from "@/components/modals/ErrorModal.vue";

export default {
  name: "App",
  components: {DefaultLayout, BaseLoader, MainPage, ErrorModal},

  computed: {
    ...mapGetters({
      isLoading: "global/isLoading",
      errorData: "global/errorData"
    })
  },

  methods: {
    ...mapMutations({
      setError: "global/setError"
    }),
    resetError() {
      this.setError(null);
    }
  }
}
</script>