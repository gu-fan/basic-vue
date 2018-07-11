<template>
  <div id="app">
      <h1 class="title">Test</h1>

      <div class="count">
        {{ _count }}
      </div>

      <button class="add" @click="countMinus">-</button>

      <button class="add" @click="countPlus">+</button>
      <QuickCount></QuickCount>
      <Link></Link>


  </div>
</template>

<script>
import QuickCount from './components/QuickCount'
import Link from './components/Link'

export default {
  name: 'app',
  components:{
    QuickCount,
    Link, 
  },
  data: function (){
    return {
      count: 0
    }
  },
  methods: {
    countPlus(){
      this.$store.dispatch('GO_PLUS')
    },
    countMinus(){
      this.$store.dispatch('GO_MINUS')
    },
  },
  computed: {
    _count (){
      return this.$store.state.count
    }
  }

}
</script>

<style lang="stylus">

@import "style/var"

*
  box-sizing border-box
body,html,#app
  margin 0
  padding 0

#app
  font-family $FONT_MAIN
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  max-width 100vw
  min-height 100vh


  color $FG
  background $BG


h1,h2,h3,h4,h5
  margin 0
  padding 10px


.title
  padding-top 100px
  font-size 50px

.count
  font-size 60px
  margin 50px


button
    appearance none
    border none

    outline-style none
    box-shadow none
    border-color transparent

    padding 5px 15px
    margin 5px

    font-size 24px
    line-height 24px
    font-weight bold

    color $FG_BTN
    background $BG_BTN

    border-bottom 1px solid lighten($BG_BTN, 10)

    &:active
      color $BG_BTN
      background $FG_BTN
      border-bottom 1px solid lighten($FG_BTN, 10)

    &:focus, &:active
      outline-style none
      box-shadow none

.add
    margin 20px
    padding 15px 40px
    font-size 36px

</style>

