<template>
  <div class="search">
    <div>Filter Locations by Criteria:</div>
    <section class="locations">
      Locations:
      <select class="state" name="state">
        <option value="" selected>State</option>
        <option value="CA">CA</option>
        <option value="CO">CO</option>
        <option value="FL">FL</option>
      </select>
      <select class="city" name="city">
        <option value="" selected>City</option>
        <option value="Coachella - 207">Coachella - 207</option>
        <option value="Burlington">Burlington</option>
        <option value="Hawthorne">Hawthorne</option>
      </select>
      <select class="highway" name="highway">
        <option value="" selected>Highway</option>
        <option value="I-40">I-40</option>
        <option value="Hwy 99">Hwy 99</option>
        <option value="Hwy 287/50">Hwy 287/50</option>
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
      Amenities: <input type="checkbox" name="ATM" value="" /> ATM
      <input type="checkbox" name="Wifi" value="" /> Wifi
      <input type="checkbox" name="others" value="" />
    </section>
    <section class="restaurants">
      Restraunts: <input type="checkbox" name="Arbys" value="" /> Arby's
      <input type="checkbox" name="Wendys" value="" /> Wendy's
      <input type="checkbox" name="others" value="" />
    </section>
    <button @click="setFilter">Search!</button>
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
  },
};
</script>

<style scoped></style>
