import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    locations: [],
    map_center: { lat: 37, lng: -95 },
    map_zoom: 4,
  },
  mutations: {
    setLocations(state, locations) {
      if (locations.length === 0) return;
      let maxLng = -120;
      let minLng = 0;
      let averagelat = 0;
      let averagelng = 0;
      locations.forEach((location) => {
        averagelat += location.position.lat / locations.length;
        averagelng += location.position.lng / locations.length;
        location.position.lng > maxLng
          ? (maxLng = location.position.lng)
          : maxLng;
        location.position.lng < minLng
          ? (minLng = location.position.lng)
          : minLng;
      });
      let diff = maxLng - minLng;
      diff < 15 ? (state.map_zoom = 6) : (state.map_zoom = 4);
      diff < 5 ? (state.map_zoom = 8) : state.map_zoom;
      state.map_center = { lat: averagelat, lng: averagelng };
      state.locations = locations;
    },
    setMapCenter(state, map_center) {
      state.map_center = map_center;
    },
    setMapZoom(state, map_zoom) {
      state.map_zoom = map_zoom;
    },
  },
  actions: {
    async loadMarkers({ commit }) {
      try {
        const { data: locations } = await axios.get("/api/locations"); // ES6 destructuring & aliasing
        const markers = locations.map((location) => ({
          position: {
            lat: location.latitude,
            lng: location.longitude,
          },
          key: location.name,
          defaultAnimation: 2,
        }));
        commit("setLocations", markers);
      } catch (err) {
        console.error(err);
      }
    },
  },
});
