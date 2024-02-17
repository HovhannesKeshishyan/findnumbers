<template>
  <div class="section-loader">
    <span class="loader"></span>
  </div>
</template>

<script>
export default {
  name: "SectionLoader"
}
</script>

<style scoped lang="scss">
@import "@/styles/colors.scss";
@import "@/styles/utils.scss";

.section-loader {
  @include flex-center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba($inactive, 0.8);

  .loader {
    width: 48px;
    height: 48px;
    border: 5px solid $jungle-green;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    animation: rotation 1s linear infinite;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>