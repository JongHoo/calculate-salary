<template lang="pug">
  .index
    .main-wrapper
      img.main-image(src="@/assets/images/dollar.png")
      h1.title 연봉계산기
      h2.subtitle 연봉을 기반으로 잡다한 금액을 계산합니다.
      .links
        NuxtLink.button--green(to="/calculate") 시작하기
</template>

<script>

export default {
}
</script>

<style lang="less">
.index {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  & > .main-wrapper {

    & > .main-image {
      width: 300px;
    }

    & > .title {
      display: block;
      font-weight: 400;
      font-size: 70px;
      color: #35495e;
      letter-spacing: 1px;
    }

    & > .subtitle {
      font-weight: 300;
      font-size: 35px;
      color: #526488;
      word-spacing: 5px;
      padding-bottom: 15px;
    }

    & >.links {
      padding-top: 15px;
    }
  }
}
</style>
