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
@import "@/styles/colors.scss";

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
    background-color: $light-blue
  }

  &.primary, &.warning, &.danger, &.success {
    color: $white;
  }

  &.primary {
    background-color: $primary;
  }

  &.warning {
    background-color: $warning;
  }

  &.danger {
    background-color: $danger;
  }

  &.success {
    background-color: $success;
  }

  &.disabled {
    background-color: $inactive;
    cursor: default;
    pointer-events: none;
    opacity: 0.5;
  }
}
</style>