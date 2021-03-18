<template>
  <div class="container">
    <div class="locate">
      <div class="header">
        <p class="text">Store {{ loc.id }}</p>
        <p>Exit {{ loc.exitNumber }},{{ loc.highway }}</p>
        <p>
          {{ loc.address.address1 }}, {{ loc.address.city }},
          {{ loc.address.state }} {{ loc.address.zip }}
        </p>
      </div>
      <!-- <p>tel: 888-555-1212</p>
      <p>Fax: 888-555-1212</p>
      <p>Truck Parking: 96</p>
      <p>DEF Lanes: 6</p> -->
      <div class="gasprice">
        <div class="gas">
          <p>{{ loc.fuelPrices[0].price }}</p>
          <p>{{ loc.fuelPrices[0].type }}</p>
        </div>
        <div class="gas">
          <p>{{ loc.fuelPrices[1].price }}</p>
          <p>{{ loc.fuelPrices[1].type }}</p>
        </div>
        <div class="gas">
          <p>{{ loc.fuelPrices[2].price }}</p>
          <p>{{ loc.fuelPrices[2].type }}</p>
        </div>
        <div class="gas">
          <p>{{ loc.fuelPrices[3].price }}</p>
          <p>{{ loc.fuelPrices[3].type }}</p>
        </div>
        <div class="gas">
          <p>{{ loc.fuelPrices[4].price }}</p>
          <p>{{ loc.fuelPrices[4].type }}</p>
        </div>
      </div>
    </div>
    <div>
      <p>Amenities:</p>
      <ul>
        <li v-for="item in loc.amenities" :key="item">
          {{ item }}
        </li>
      </ul>
      <!-- <img
        src="https://badianhotel.com/wp-content/uploads/2020/08/What-are-amenities-destacada.jpg"
      /> -->
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
  border-bottom: black solid 2px;
}

.container {
  border: solid black 2px;
  display: block;
  flex-wrap: wrap;
  margin: 10px;
}

.gasprice {
  border: solid black 2px;
  display: flex;
  justify-content: center;
  margin: 10px;
}

img {
  width: 50px;
  height: 50px;
}
</style>
<!-- <div v-for="(location, index) in locations" :key="index" class="locate">
            <div v-text="location"></div>
            <div>{{location}} Found</div>
        </div> -->
<!-- <div class="info">
    <p>tel:{{tellNumber}}</p>
    <p>Fax:{{faxNumber}}</p>
    <p>Truck Parking:{{Truck}}</p>
    <p>DEF Lanes:{{tellNumber}}</p> -->
