<template>
  <div>
    <div v-for="home in homes" :key="home.objectID" class="home">
      <HomeCard :home="home" />
    </div>
  </div>
</template>

<script>
import homes from '~/data/homes'

export default {
  name: 'NuxtbnbHome',
  data() {
    return {
      homes
    }
  }
}
</script>
