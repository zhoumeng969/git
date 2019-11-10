<template>
  <div>
    <NavHeader></NavHeader>
    
    <NavFooter></NavFooter>
  </div>
</template>

<script>
import NavHeader from './components/Header.vue'
import NavFooter from './components/Footer.vue'
export default {
  name: 'app',
  components: {
    NavHeader,
    NavFooter
  }
}
</script>

