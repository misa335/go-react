<template>
  <div class="container">
    <div class="locate">
      <div>
        <p>Exit 43 North Ft. Myers, FL I-75</p>
        <p class="text">Store {{ loc.id }}</p>
        <p>123 Fake St, Beverly Hills, CA 90210</p>
      </div>
      <p>tel: 888-555-1212</p>
      <p>Fax: 888-555-1212</p>
      <p>Truck Parking: 96</p>
      <p>DEF Lanes: 6</p>
      <div class="gasprice">
        <div class="gas">
          <p>$2.15</p>
          <p>Unleaded</p>
          <p>$3.15</p>
          <p>Unleaded</p>
        </div>
        <div class="gas">
          <p>$2.64</p>
          <p>Diesel 815</p>
        </div>
        <div class="gas">
          <p>$3.95</p>
          <p>Propane</p>
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
      <img
        src="https://badianhotel.com/wp-content/uploads/2020/08/What-are-amenities-destacada.jpg"
      />
      <img
        src="/Users/tanakakakeru/Desktop/codechrysalis/go-react/img/pr.png"
      />
    </div>
    <div class="restaurant">
      <p>Restaurants:</p>
      <img
        src="https://badianhotel.com/wp-content/uploads/2020/08/What-are-amenities-destacada.jpg"
      />
      <img
        src="/Users/tanakakakeru/Desktop/codechrysalis/go-react/img/pr.png"
      />
    </div>
    <div>{{ loc }}</div>
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

.container {
  border: solid black 2px;
  display: flex;
  flex-wrap: wrap;
}

.gasprice {
  border: solid black 2px;
  display: flex;
  flex-wrap: wrap;
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
