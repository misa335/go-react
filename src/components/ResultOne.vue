<template>
  <div class="container" @click="zoom">
    <div class="locate">
      <div class="header">
        <p class="text">Store {{ loc.id }}</p>
        <p>Exit {{ loc.exitNumber }},{{ loc.highway }}</p>
        <p>
          {{ loc.address.address1 }}, {{ loc.address.city }},
          {{ loc.address.state }} {{ loc.address.zip }}
        </p>
      </div>
      <p>Phone: {{ loc.phoneNumber }}</p>
      <div class="gasprice">
        <div
          class="gas"
          v-for="fuelPrice in loc.fuelPrices"
          :key="fuelPrice.price"
        >
          <p>{{ fuelPrice.type }}</p>
          <p>{{ fuelPrice.price }}</p>
        </div>
      </div>
    </div>
    <div class="amenity">
      <p>Amenities:</p>
      <ul>
        <li v-for="item in loc.amenities" :key="item">
          {{ item }}
        </li>
      </ul>
      <!-- <img
        src="https://badianhotel.com/wp-content/uploads/2020/08/What-are-amenities-destacada.jpg"
      /> -->
    </div>
    <div class="restaurant">
      <p>Restaurants:</p>
      <ul>
        <li v-for="item in loc.restaurants" :key="item">
          {{ item }}
        </li>
      </ul>
      <!-- <img
        src="https://badianhotel.com/wp-content/uploads/2020/08/What-are-amenities-destacada.jpg"
      /> -->
    </div>
  </div>
</template>

<script>
export default {
  props: ["loc"],
  methods: {
    zoom() {
      let center = { lat: this.loc.latitude, lng: this.loc.longitude };
      this.$store.commit("setMapZoom", 9);
      this.$store.commit("setMapCenter", center);
    },
  },
};
</script>

<style scoped>
.text {
  float: right;
  margin: 10px;
  font-size: 20px;
  font-weight: 900;
}
.gas {
  float: right;
  margin: 10px;
}

.header {
  display: block;
  padding-top: 5px;
  border-bottom: black solid 2px;
}

.container {
  /* border: solid black 2px; */
  display: block;
  flex-wrap: wrap;
  margin: 10px;
  box-shadow: 0 0 8px gray;
  border-radius: 20px;
}

.gasprice {
  /* border: solid black 2px; */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 10px;
  font-size: 20px;
  font-weight: 400;
  /* overflow-x: scroll; */
  box-shadow: 0 0 8px gray;
  border-radius: 20px;
}
.type {
  font-size: 10px;
}
img {
  width: 50px;
  height: 50px;
}
ul {
  list-style: none;
}
.amenity {
  padding-left: 10px;
  display: flex;
}
.restaurant {
  padding-left: 10px;
  display: flex;
}
</style>
