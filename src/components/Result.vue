<template>
  <div>
    <h1>16 Locations Found</h1>
    <ResultOne v-for="store in data" :loc="store" :key="store.id" />
    <button @click="setFilter">Reset!</button>
  </div>
</template>

<script>
import ResultOne from "./ResultOne";

export default {
  name: "app",
  props: ["filter", "state"],
  components: {
    ResultOne,
  },
  data() {
    return {
      data: [],
    };
  },
  async mounted() {
    const data = await fetch(`/api/states/${this.state}/`);
    const parsed = await data.json();
    this.data = parsed;
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
