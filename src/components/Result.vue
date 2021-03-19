<template>
  <div>
    <h1 v-if="this.data.length > 1">{{ this.data.length }} Locations Found</h1>
    <h1 v-else>{{ this.data.length }} Location Found</h1>
    <button @click="setFilter">Reset!</button>
    <ResultOne v-for="store in data" :loc="store" :key="store.id" />
  </div>
</template>

<script>
import ResultOne from "./ResultOne";

export default {
  name: "app",
  props: ["filter", "state", "city"],
  components: {
    ResultOne,
  },
  data() {
    return {
      data: [],
    };
  },
  async mounted() {
    let data;
    if (!this.$props.city) {
      data = await fetch(`/api/states/${this.$props.state}`);
    } else {
      data = await fetch(
        `/api/states/${this.$props.state}/cities/${this.$props.city}`
      );
    }
    const parsed = await data.json();
    this.data = parsed;
    let positions = this.data.map((location) => ({
      key: location.name,
      defaultAnimation: 2,
      position: { lat: location.latitude, lng: location.longitude },
    }));
    this.$store.commit("setLocations", positions);
  },
  methods: {
    setFilter() {
      this.$emit("set-filter", false);
      this.$emit("reset", true);
      this.$store.dispatch("loadMarkers");
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
