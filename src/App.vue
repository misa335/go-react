<template>
  <div id="app">
    <h1>FlyingK Truck Stops</h1>
    <div>
      <div>Locations:</div>
      <Map />
    </div>
    <div>
      <Search
        v-if="filter !== true"
        v-bind:filter="filter"
        @set-filter="setFilter"
        @pick-state="setState"
      />
      <Result
        v-if="filter === true"
        v-bind:filter="filter"
        @set-filter="setFilter"
        :state="selectedState"
      />
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
    selectedState: "FL",
  }),
  methods: {
    setFilter: function(filtered) {
      this.filter = filtered;
    },
    setState: function(state) {
      this.selectedState = state;
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
