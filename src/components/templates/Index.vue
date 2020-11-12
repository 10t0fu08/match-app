<template>
  <div>
    <CommonHeader />
    <router-view />
  </div>
</template>

<script>
import CommonHeader from "../CommonHeader.vue";
export default {
  name: "Index",
  components: {
    CommonHeader,
  },
};
</script>

<style>
</style>