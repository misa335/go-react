<template>
  <div class="search">
    <div>Filter Locations by Criteria:</div>
    <section class="locations">
      Locations:
      <select class="state" name="state" @change="pickState">
        <option value="" :selected="true">State</option>
        <option v-for="code in stateList" :key="code" :value="code">{{
          code
        }}</option>
      </select>
      <select class="city" name="city" @change="pickCity">
        <option value="" selected>City</option>
        <option v-for="city in cityList" :key="city" :value="city">{{
          city
        }}</option>
      </select>
      <select class="highway" name="highway">
        <option value="" selected>Highway</option>
        <option v-for="hW in highwayList" :key="hW" :value="hW">{{
          hW
        }}</option>
      </select>
    </section>
    <section class="services">
      Truck Services:
      <div class="checkservices">
        <input type="checkbox" name="oil" value="" /> Oil change
        <input type="checkbox" name="mecha" value="" /> Light Mechanical
        <input type="checkbox" name="tirepass" value="" /> TirePass
        <input type="checkbox" name="truckcare" value="" /> Truck Tire Care
      </div>
    </section>
    <section class="type">
      Type: <input type="checkbox" name="stop" value="" /> Travel Stop
      <input type="checkbox" name="store" value="" /> Country Store
    </section>
    <section class="amenities">
      Amenities:
      <select>
        <option v-for="a in amenitiesList" :key="a" :value="a">{{ a }}</option>
      </select>
    </section>
    <section class="restaurants">
      Restaurants:
      <select>
        <option v-for="restaurant in restaurantsList" :key="restaurant">{{
          restaurant
        }}</option>
      </select>
    </section>
    <div id="searchbtn" @click="setFilter">
      <img src="./searchButton.png" alt="Search" />
      <div>Search!</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Search",
  props: ["filter"],
  methods: {
    setFilter() {
      this.$emit("set-filter", true);
    },
    async pickState(e) {
      this.$emit("pick-state", e.target.value);
      const cities = await fetch(
        `/api/states/${e.target.value}/cities`
      ).then((res) => res.json());
      this.cityList = cities;
    },
    pickCity(e) {
      this.$emit("pick-city", e.target.value);
    },
  },
  data() {
    return {
      stateList: [],
      cityList: [],
      highwayList: [],
      amenitiesList: [],
      restaurantsList: [],
    };
  },
  async mounted() {
    const states = await fetch("/api/states").then((res) => res.json());
    this.stateList = states;
    const highways = await fetch("/api/highways").then((res) => res.json());
    this.highwayList = highways;
    const amenities = await fetch("api/amenities").then((res) => res.json());
    this.amenitiesList = amenities;
    const restaurants = await fetch("api/restaurants").then((res) =>
      res.json()
    );
    this.restaurantsList = restaurants;
  },
};
</script>

<style scoped>
div .space {
  display: flex;
  margin: 20px;
  padding: 10px;
  flex-direction: row;
  justify-content: center;
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 0 0 8px gray;
}

#searchbtn {
  width: 100%;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
