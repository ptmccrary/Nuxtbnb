<template>
  <div>
    <header>
      <NuxtLink to="/">Home</NuxtLink>
    </header>

    <main>
      <Nuxt />
    </main>

    <footer></footer>
  </div>
</template>

<script>
export default {
  name: 'LayoutDefault'
}
</script>

<style lang="scss" scoped>
header {
  background-color: #ccc;
}
</style>
