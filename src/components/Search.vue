<template>
  <div class="search">
    <div>Filter Locations by Criteria:</div>
    <div class="space">
      <div id="locations">
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
          <option value="I-40">I-40</option>
          <option value="Hwy 99">Hwy 99</option>
          <option value="Hwy 287/50">Hwy 287/50</option>
        </select>
      </div>
    </div>
    <div class="space">
      <section id="services">
        Truck Services:
        <div class="checkservices">
          <input type="checkbox" name="oil" value="" /> Oil change
          <input type="checkbox" name="mecha" value="" /> Light Mechanical
          <input type="checkbox" name="tirepass" value="" /> TirePass
          <input type="checkbox" name="truckcare" value="" /> Truck Tire Care
        </div>
      </section>
    </div>
    <div class="space">
      <section id="type">
        Type: <input type="checkbox" name="stop" value="" /> Travel Stop
        <input type="checkbox" name="store" value="" /> Country Store
      </section>
    </div>
    <div class="space">
      <section id="amenities">
        Amenities: <input type="checkbox" name="ATM" value="" /> ATM
        <input type="checkbox" name="Wifi" value="" /> Wifi
        <input type="checkbox" name="others" value="" /> Others
      </section>
    </div>
    <div class="space">
      <section id="restaurants">
        Restraunts: <input type="checkbox" name="Arbys" value="" /> Arby's
        <input type="checkbox" name="Wendys" value="" /> Wendy's
        <input type="checkbox" name="others" value="" /> Others
      </section>
    </div>
    <button @click="setFilter">search!</button>
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
    };
  },
  async mounted() {
    const states = await fetch("/api/states").then((res) => res.json());
    this.stateList = states;
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
</style>
