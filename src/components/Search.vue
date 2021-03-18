<template>
  <div class="search">
    <title>Filter Locations by Criteria:</title>
    <section>
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
    <section>Truck Services:</section>
    <section>Type:</section>
    <section>Amenities:</section>
    <section>Restraunts:</section>
  </div>
</template>

<script>
export default {
  name: "Search",
};
</script>

<style scoped></style>
