<template>
  <div>
    <img src="https://media1.tenor.com/images/99f00b32545bf5b5db8bf8ecbb7f0aec/tenor.gif?itemid=7971019"/><br/><br/>
    <h1>Error!</h1>
    {{ error.message }}
    {{ error.statusCode }}
  </div>
</template>

<script>
export default {
  name: 'LayoutError',
  props: {
    error: { type: Object, required: true }
  },
  head() {
    return {
      title: 'WeeWoo Error!!'
    }
  }
}
</script>

<style lang="scss" scoped>
div {
  text-align: center;
}
</style>
