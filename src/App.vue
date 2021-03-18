<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <Search />
    <div>
      <Map />
    </div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import Map from "./components/Map";
import Search from "./components/Search";

export default {
  name: "app",
  components: {
    HelloWorld,
    Map,
    Search,
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
