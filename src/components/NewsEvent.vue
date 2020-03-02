<template>
  <BaseNews v-bind="{ ...$attrs, ...$props }" v-on="$listeners">
    <div class="event">
      <small>Location:</small>
      <p>{{ news.location }}</p>

      <small>Attendees:</small>
      <p>{{ news.attendees }}</p>

      <AppButton @click="handleClick" :type="news.attending ? 'primary' : 'secondary'">
        <AppIcon :icon="news.attending ? 'check' : 'plus'" class="mr-1" />
        {{ news.attending ? 'You’re attending' : 'Join!' }}
      </AppButton>
    </div>
  </BaseNews>
</template>

<script>
import BaseNews from "./BaseNews";

export default {
  components: {
    BaseNews
  },
  props: {
    news: {
      type: Object,
      required: true
    }
  },
  methods: {
    handleClick() {
      this.$emit(this.news.attending ? "leave" : "join", this.news);
    }
  }
};
</script>

<style lang="sass" scoped>

</style>
