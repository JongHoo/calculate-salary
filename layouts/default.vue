<template lang="pug">
  .main
    .header
      span.title(@click="$router.push({ name: 'index' })") 실수령계산기
      span.about(@click="$router.push({ name: 'about' })") About
    nuxt.router
</template>

<style scoped lang="less">
.header {
  background-color: #002776;
  color: white;
  display: flex;
  height: 50px;
  align-items: center;
  padding: 0 20px;
  justify-content: space-between;

  & span {
    cursor: pointer;
    &.title {
      font-size: 20px;
      font-weight: 800;
    }
    &.about {
      font-size: 15px;
      color: #9b9b9b;
    }
  }
}
.router {
  min-height: calc(100vh - 50px);
}
</style>
<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: none;
  color: white;
  background-color: #21ac5f;
  text-decoration: none;
  padding: 10px 30px;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
}

.button--green:hover {
  color: #fff;
  background-color: #1b894c;
}

.button--green:disabled {
  border: none;
  background-color: #9b9c9c;
  cursor: unset;
}
</style>
