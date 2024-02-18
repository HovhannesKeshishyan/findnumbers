<template>
  <Teleport to="body">
    <div class="info_modal">
      <div class="modal_shape"></div>

      <div class="modal_content">
        <p class="modal_title">{{ modalTitle }}</p>

        <div class="modal_message">{{ modalMessage }}</div>

        <div class="modal_buttons">
          <button @click=handleOkClick class="ok_btn">
            {{ okBtnText }}
          </button>

          <button v-if="!hideCancelBtn" @click="handleCancelClick" class="cancel_btn">
            {{ cancelBtnText }}
          </button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script>
export default {
  name: "InfoModal",
  emits: ["on-confirm", "on-cancel"],

  props: {
    modalTitle: {
      type: String,
      default: "Congratulations"
    },
    modalMessage: {
      type: String
    },
    okBtnText: {
      type: String,
      default: "Ok"
    },
    cancelBtnText: {
      type: String,
      default: "Cancel"
    },
    hideCancelBtn: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    handleOkClick() {
      this.$emit("on-confirm");
    },

    handleCancelClick() {
      this.$emit("on-cancel");
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/styles/colors.scss";
@import "@/styles/utils.scss";

.info_modal {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;

  .modal_shape {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: $white;
    opacity: 0.8;
  }

  .modal_content {
    position: relative;
    z-index: 101;
    width: 80%;
    max-width: 450px;
    height: fit-content;
    min-height: 500px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    margin: 50px auto;
    background-color: $persian-green;
    border-radius: 10px;
    box-shadow: 0 0 8px 2px $jungle-green;

    .modal_title {
      font-size: 3rem;
      font-style: italic;
      width: 100%;
      text-align: center;
      padding: 15px 30px;
      border-bottom: 1px solid $white;
    }

    .modal_message {
      font-size: 2.5rem;
      flex-grow: 1;
      padding: 20px 35px;
      width: 100%;
      text-align: center;
    }

    .modal_buttons {
      @include flex-center;
      gap: 2rem;
      width: 100%;
      padding: 15px 30px;
      border-top: 1px solid $white;

      button {
        @include flex-center;
        min-width: 100px;
        min-height: 45px;
        padding: 10px 30px;
        cursor: pointer;
        font-size: 1.8rem;
        border-radius: 10px;
        outline: none;
        border: 2px solid transparent;
        transition: background-color 0.2s ease-in-out;
        color: $white;

        &.ok_btn {
          background-color: $primary;

          &:hover {
            background-color: darken($primary, 10%);
          }
        }

        &.cancel_btn {
          background-color: $danger;

          &:hover {
            background-color: darken($danger, 10%);
          }
        }
      }
    }
  }
}
</style>