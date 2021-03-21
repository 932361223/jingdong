<template>
  <div class="cart"></div>
  <Docker :currentIndex="1" />
</template>

<script>
import Docker from '../../components/Docker'
export default {
  name: 'CartList',
  components: {
    Docker
  }
}
</script>

<style lang="scss" scoped>
.cart {
  margin-top: 0.2rem;
  text-align: center;
}
</style>