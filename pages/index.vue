<template>
  <div>
    <div v-for="home in homes" :key="home.objectID" class="home">
      <NuxtLink :to="`/home/${home.objectID}`">
        <HomeCard :home="home" />
      </NuxtLink>
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
