<template>
  <button :class="buttonClass">{{ label }}</button>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    label: {
      type: String,
      default: "Click"
    },

    type: {
      type: String,
      default: "primary",
      validator(value) {
        return ["light-blue", "primary", "warning", "danger", "success"].includes(value);
      }
    },

    disabled: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    buttonClass() {
      return `base-button ${this.type} ${this.disabled ? 'disabled' : ''}`;
    }
  }
}
</script>

<style scoped lang="scss">
.base-button {
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  min-width: 100px;
  min-height: 50px;
  border-radius: 2.4rem;
  font-size: 2rem;
  cursor: pointer;

  &.light-blue {
    background-color: #7ebaf1;
  }

  &.primary, &.warning, &.danger, &.success {
    color: #fff;
  }

  &.primary {
    background-color: #3e67ba;
  }

  &.warning {
    background-color: #e69035;
  }

  &.danger {
    background-color: #9a1d26;
  }

  &.success {
    background-color: #6bad5b;
  }

  &.disabled {
    background-color: #485461;
    cursor: default;
    pointer-events: none;
    opacity: 0.5;
  }
}
</style>