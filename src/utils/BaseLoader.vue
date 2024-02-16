<template>
  <div class="loader-container">
    <div class="water"></div>
    <p>Loading...</p>
  </div>
</template>

<script>
export default {
  name: "BaseLoader"
}
</script>

<style lang="scss" scoped>
.loader-container {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  flex-direction: column;
  height: 100%;
  min-height: 100vh;
  min-width: 100vw;
  background-image: linear-gradient(315deg, #485461, #28313b 74%);

  p {
    margin-top: 10px;
    color: #fff;
  }

  .water {
    display: flex;
    width: 100px;
    height: 100px;
    background-color: skyblue;
    border-radius: 50%;
    margin: 0 auto;
    position: relative;
    box-shadow: inset 0 0 30px 0 rgba(0, 0, 0, 0.5),
    0 4px 10px 0 rgba(0, 0, 0, 0.5);
    overflow: hidden;

    &::before,
    &::after {
      content: "";
      position: absolute;
      width: 100px;
      height: 100px;
      top: -50px;
      background-color: #fff;
    }

    &::before {
      border-radius: 45%;
      background: rgba(255, 255, 255, 0.7);
      animation: wave 5s linear infinite;
    }

    &::after {
      border-radius: 35%;
      /* background:rgba(28, 131, 54, 0.3); */
      animation: wave 5s linear infinite;
    }
  }
}

@keyframes wave {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>