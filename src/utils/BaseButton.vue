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
@use "@/styles/utils";
@use "@/styles/colors";

.base-button {
  @include utils.flex-center;
  outline: none;
  border: none;
  min-width: 100px;
  min-height: 50px;
  border-radius: 2.4rem;
  font-size: 2rem;
  cursor: pointer;

  &.light-blue {
    background-color: colors.$light-blue;
  }

  &.primary, &.warning, &.danger, &.success {
    color: colors.$white;
  }

  &.primary {
    background-color: colors.$primary;
  }

  &.warning {
    background-color: colors.$warning;
    color: colors.$black;
  }

  &.danger {
    background-color: colors.$danger;
  }

  &.success {
    background-color: colors.$success;
  }

  &.disabled {
    background-color: colors.$inactive;
    cursor: default;
    pointer-events: none;
    opacity: 0.5;
  }
}
</style>