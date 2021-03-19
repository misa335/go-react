<template>
  <GmapMap
    :zoom="map_zoom"
    :center="map_center"
    map-type-id="terrain"
    style="width: 100%; height: 300px"
  >
    <GmapMarker
      v-for="location in locations"
      :key="location.key"
      :position="location.position"
      :animation="location.defaultAnimation"
      @rightclick="markerRightClicked"
    />
  </GmapMap>
</template>

<script>
import { gmapApi } from "vue2-google-maps";

export default {
  mounted() {
    this.getLocations();
  },
  computed: {
    locations() {
      return this.$store.state.locations;
    },
    map_center() {
      return this.$store.state.map_center;
    },
    map_zoom() {
      return this.$store.state.map_zoom;
    },
    google: gmapApi,
  },
  methods: {
    getLocations() {
      this.$store.dispatch("loadMarkers");
    },
    markerRightClicked() {},
  },
};
</script>
