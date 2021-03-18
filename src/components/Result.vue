<template>
  <div>
    <h1>16 Locations Found</h1>
    <button @click="setFilter">Reset!</button>
    <ResultOne :loc="data" />
  </div>
</template>

<script>
import ResultOne from "./ResultOne";
import data from "./sampledata";

export default {
  name: "app",
  props: ["filter"],
  components: {
    ResultOne,
  },
  data() {
    return {
      data: data[0],
    };
  },
  methods: {
    setFilter() {
      this.$emit("set-filter", false);
    },
  },
};
</script>

<style scoped>
.text {
  float: right;
}
.gas {
  float: right;
}
img {
  height: 200px;
  width: 200px;
}
.restaurant {
  float: right;
}
</style>
