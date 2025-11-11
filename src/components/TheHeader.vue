<template>
  <header>
    <h1>Find the numbers</h1>
  </header>
</template>

<script>
export default {
  name: "TheHeader"
}
</script>

<style scoped lang="scss">
@use "@/styles/utils";
@use "@/styles/colors";

header {
  @include utils.flex-center;
  min-height: 8rem;
  font-size: 1.8rem;
  padding: 1.5rem 3rem;
  background-image: linear-gradient(315deg, #485461 0%, #28313b 74%);
  color: colors.$white;
  text-align: center;

  @media only screen and (max-width: 450px) {
    padding: 1.5rem 2rem;
    font-size: 1.5rem;
  }
}
</style>