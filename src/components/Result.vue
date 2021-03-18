<template>
  <div>
    <h1>16 Locations Found</h1>
    <div class="locate">
      <div>
        <p>Exit 43 North Ft. Myers, FL I-75</p>
        <p class="text">Store#495</p>
        <p>123 Fake St, Beverly Hills, CA 90210</p>
      </div>
      <p>tel: 888-555-1212</p>
      <p>Fax: 888-555-1212</p>
      <p>Truck Parking: 96</p>
      <p>DEF Lanes: 6</p>
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
    <div>
      <p>Amenities:</p>
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
  </div>
</template>

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
