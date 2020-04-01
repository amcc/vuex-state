<template>
  <div>
    <h2>Welcome to Counter</h2>
    <p>I see {{ count }} things</p>
    <button @click="inc">increment counter</button>
    <button @click="dec">decrement counter</button>
  </div>
</template>

<script>
export default {
  name: "Customer",
  computed: {
    count() {
      return this.$store.state.count;
    }
  },
  created() {
    // console.log(this.$store);
  },
  methods: {
    inc() {
      this.$store.commit("inc");
    },
    dec() {
      this.$store.commit("dec");
    }
  }
};
</script>

<style scoped>
</style>