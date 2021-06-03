<template>
  <Pager :total="total" :current="current" @changPage="handleChange($event)" />
</template>

<script>
import Pager from "./index";
export default {
  data() {
    return {
      total: 302,
      current: 1,
    };
  },
  components: {
    Pager,
  },
  methods: {
    handleChange(newPage) {
      this.current = newPage;
      console.log("win");
    },
  },
};
</script>

<style>
</style>