<template>
  <div>
    <h2>Link Test</h2>
    <button class="add" @click="http">
      server
    </button>
  </div>
</template>
<script>
export default {
  name: "Link",
  methods : {
    async http(){
      console.log(this)
      var res = await this.$http('http://localhost:4000')
      console.log(res.data)
    }
  }
}
</script>
<style lang="stylus">
</style>
