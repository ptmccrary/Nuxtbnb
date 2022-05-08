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
      title: this.home.title
    }
  },
  created() {
    const home = homes.find((home) => home.objectID === this.$route.params.id)
    this.home = home
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
</style>
