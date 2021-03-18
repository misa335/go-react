<template>
  <div id="app">
    <h1>FlyingK Truck Stops</h1>
    <div>
      <div>Locations:</div>
      <Map />
    </div>
    <div>
      <Search
        v-if="filter === false"
        v-bind:filter="filter"
        @set-filter="setFilter"
      />
      <Result v-else />
    </div>
  </div>
</template>

<script>
import Map from "./components/Map";
import Search from "./components/Search";
import Result from "./components/Result.vue";

export default {
  name: "app",
  components: {
    Map,
    Search,
    Result,
  },
  data: () => ({
    filter: false,
  }),
  methods: {
    setFilter: function(filtered) {
      console.log("before:", this.filter);
      this.filter = filtered;
      console.log("after:", this.filter);
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
