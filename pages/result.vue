<template lang="pug">
.result
  .result-wrapper
    span {{ monthlyAmount }}
</template>

<script>
export default {
  name: "result",
  computed: {
    monthlyAmount () {
      if (this.$route.params) return Math.floor(this.$route.params.salary / 12)
    }
  }
}
</script>

<style scoped lang="less">

</style>
