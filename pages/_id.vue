<template>
  <div>{{ home.title }}</div>
</template>

<script>
import homes from '~/data/homes'

export default {
  data() {
    return {
      home: null
    }
  },
  created() {
    const home = homes.find((home) => home.objectID === this.$route.params.id)
    this.home = home
  }
}
</script>

<style lang="scss" scoped></style>
