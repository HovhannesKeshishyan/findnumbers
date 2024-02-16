<template>
  <div class="modal_container">
    <div class="modal">
      <div class="modal_message">
        You loss
      </div>
      <div class="modal_buttons">
        <div class="modal_button modal_ok_button">Ok</div>
        <div class="modal_button modal_play_again_button">Play Again</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InfoModal"
}
</script>

<style scoped lang="scss">
.modal_container {
  display: none;
  position: absolute;
  width: 700px;
  height: 700px;
  background-color: rgba(128, 128, 128, 0.5);

  .modal {
    display: block;
    position: absolute;
    width: 400px;
    height: 300px;
    border: 2px solid gold;
    background-color: rgba(255, 255, 255, 0.8);
    left: 150px;
    top: 150px;
    color: green;

    .modal_message {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 80%;
      height: 100px;
      margin: 10% auto;
      border: 2px solid green;
      font-size: 3rem;
    }

    .modal_buttons {
      display: flex;
      justify-content: space-around;

      .modal_button {
        display: flex;
        width: 30%;
        height: 50px;
        border: 2px solid green;
        justify-content: center;
        align-items: center;
        font-size: 1.5rem;
      }
    }
  }
}
</style>