<template>
  <div>
    <h1>16 Locations Found</h1>
    <ResultOne v-for="store in data" :loc="store" :key="store.id" />
  </div>
</template>

<script>
import ResultOne from "./ResultOne";

export default {
  name: "app",
  components: {
    ResultOne,
  },
  props: ["state"],
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
