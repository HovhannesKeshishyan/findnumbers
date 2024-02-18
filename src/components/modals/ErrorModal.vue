<template>
  <InfoModal
      modal-type="error"
      modal-title="Oops!!!"
      :modal-message="error.message"
      :hide-cancel-btn="true"
      ok-btn-type="error"
      @on-confirm="onConfirm"
  />
</template>

<script>
import InfoModal from "@/components/modals/InfoModal.vue";

export default {
  name: "ErrorModal",
  components: {InfoModal},
  emits: ["on-confirm"],
  props: {
    error: {
      type: Object
    }
  },

  methods: {
    onConfirm() {
      this.$emit("on-confirm");
    }
  }
}
</script>

<style scoped lang="scss">

</style>