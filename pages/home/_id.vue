<template>
  <div class="page--home">
    <div class="flex">
      <img
        v-for="image in home.images"
        :key="image"
        :src="image"
        width="200"
        height="150"
        alt=""
      />
    </div>

    <h1>{{ home.title }}</h1>
    <p>${{ home.price }} / night</p>
    <div>
      <IconMarker />{{ home.location.address }} {{ home.location.city }}
      {{ home.location.street }}
    </div>
    <div><IconStar />{{ home.reviewValue }}</div>
    <p>
      {{ home.guests }} guests, {{ home.bedrooms }} rooms, {{ home.beds }} beds,
      {{ home.bathrooms }} bath
    </p>
    <div ref="map" class="map"></div>
  </div>
</template>

<script>
import homes from '~/data/homes'

export default {
  data() {
    return {
      home: null
    }
  },
  head() {
    return {
      title: this.home.title,
      script: [
      {
        src: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBNDoadQ7D6GvTh5xCQ2ee8F1R-KsN-ij8&libraries=places&callback=initMap',
        hid: 'map',
        defer: true,
        skip: process.client && window.mapLoaded
      },
      {
        innerHTML: "window.initMap = function(){ window.mapLoaded = true }",
        hid: 'map-init'
      }
      ]
    }
  },
  created() {
    const home = homes.find((home) => home.objectID === this.$route.params.id)
    this.home = home
  },
  mounted() {
    const options = {
      zoom: 18,
      center: new window.google.maps.LatLng(this.home._geoloc.lat, this.home._geoloc.lng),
      disableDefaultUI: true,
      zoomControl: true
    }
    const map = new window.google.maps.Map(this.$refs.map, options)
    const position = new window.google.maps.LatLng(this.home._geoloc.lat, this.home._geoloc.lng)
    const marker = new window.google.maps.Marker({ position })
    marker.setMap(map)
  },
}
</script>

<style lang="scss" scoped>
.page--home {
  .icon {
    height: 20px;
    width: 20px;
  }
}

.map {
  height: 800px;
  width: 800px;
}
</style>
