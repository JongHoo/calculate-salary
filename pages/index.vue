<template lang="pug">
  .index
    .main-wrapper
      img.main-image(src="@/assets/images/calculator.png")
      h1.title 실수령계산기
      h2.subtitle 연봉으로 월 실수령액을 알려드립니다.
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
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  & > .main-wrapper {

    & > .main-image {
      width: 200px;
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
