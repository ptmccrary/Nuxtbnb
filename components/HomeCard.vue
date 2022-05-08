<template>
  <div class="home">
    <img v-if="home.images && home.images.length > 0" :src="home.images[0]" />
    <p>{{ home.title }}</p>
    <p>
      {{ home.location.address }} {{ home.location.city }}
      {{ home.location.state }}
    </p>
    <p>{{ home.guests }} guests</p>
    <p>{{ home.pricePerNight }} / night</p>
  </div>
</template>

<script>
export default {
  props: {
    home: { type: Object, required: true }
  }
}
</script>

<style lang="scss" scoped>
.home {
  float: left;
  margin: 10px;
}

img {
  width: 200px;
}
</style>
