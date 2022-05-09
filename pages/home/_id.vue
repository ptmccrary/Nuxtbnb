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
export default {
  async asyncData({ params, $dataApi, error }) {
    const response = await $dataApi.getHome(params.id)

    if (!response.ok)
      return error({
        statusCode: response.status,
        message: response.statusText
      })

    return { home: response.json }
  },
  head() {
    return {
      title: this.home.title
    }
  },
  mounted() {
    this.$maps.showMap(
      this.$refs.map,
      this.home._geoloc.lat,
      this.home._geoloc.lng
    )
  }
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
