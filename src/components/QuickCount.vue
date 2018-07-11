<template>
  <div>
    <h2>Quick Counter</h2>
    <div>
      {{ $store.state.count }}
    </div>

    <button class="add" @click="NMinus">N-</button>
    <button class="add" @click="NPlus">N+</button>

  </div>
</template>

<script>
import delay from '../common/delay'

export default {
  name: 'app',
  methods:{
    async NPlus(){
      for (var i=0;i<10;i++) {
        await delay(100)
        this.$store.dispatch('GO_PLUS')
      }
    },
    async NMinus(){
      for (var i=0;i<10;i++) {
        await delay(100)
        this.$store.dispatch('GO_MINUS')
      }
    },

  }
}

</script>

