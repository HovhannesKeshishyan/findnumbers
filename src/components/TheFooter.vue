<template>
  <footer>
    <h2>Footer</h2>
  </footer>
</template>

<script>
export default {
  name: "TheFooter"
}
</script>

<style scoped lang="scss">
@import "@/styles/utils.scss";
@import "@/styles/colors.scss";

footer {
  @include flex-center;
  min-height: 8rem;
  font-size: 1.8rem;
  background: linear-gradient(90deg, rgba(24, 24, 25, 1) 0%, rgba(38, 66, 42, 1) 53%, rgba(37, 58, 62, 1) 100%);
  color: $white;
  text-align: center;
}
</style>