<template>
  <div id="app">
    <modo1></modo1>  
    <modo2></modo2>
    <modo3></modo3>
    <modo4></modo4>
    <modo5></modo5>
    <!-- <modo6></modo6> -->
    <modo7></modo7>
  </div>
</template>

<script>
import Modo1 from './components/modo1.vue'
import Modo2 from './components/modo2.vue'
import Modo3 from './components/modo3.vue'
import Modo4 from './components/modo4.vue'
import Modo5 from './components/modo5.vue'
// import Modo6 from './components/modo6.vue'
import Modo7 from './components/modo7.vue'

export default {
  name: "App",
  components:{
    Modo1,
    Modo2,
    Modo3,
    Modo4,
    Modo5,
    // Modo6,
    Modo7
  },
}
</script>