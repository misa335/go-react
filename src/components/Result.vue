<template>
  <div>
    <h1>{{ this.data.length }} Locations Found</h1>
    <button @click="setFilter">Reset!</button>
    <ResultOne v-for="store in data" :loc="store" :key="store.id" />
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
    const data = await fetch(`/api/states/${this.$props.state}`);
    const parsed = await data.json();
    console.log(this.$props.state);
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
