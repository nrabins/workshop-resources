<template functional>
  <AppModal
    @close="listeners.close"
  >
    <h3 class="confirmation-message">{{props.message}}</h3>

    <div class="buttons">
      <AppButton @click="listeners.confirm">Confirm</AppButton>
      <AppButton @click="listeners.close">Cancel</AppButton>
    </div>
  </AppModal>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: true
    },
  },
  methods: {
    logThis() {
      console.log('clicked button')
    }
  }
};
</script>

<style lang="css" scoped>
</style>
