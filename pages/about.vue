<template lang="pug">
.about
  .image.area
    img.profile-image(src="@/assets/images/jhmg.jpeg")
  .name.area
    span.name Jay Hwang
  .sns.area(@click="moveLinkedIn")
    img.sns-image(src="@/assets/images/linkedin-logo.png")
</template>

<script>
export default {
  name: "about",
  methods: {
    moveLinkedIn () {
      window.open('https://www.linkedin.com/in/jonghoo/', '_blank')
    }
  }
}
</script>

<style scoped lang="less">
.about {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;

  & > .area {
    margin-bottom: 10px;
    &.sns {
      cursor: pointer;
    }
    & > .name {
      font-size: 20px;
      font-weight: bold;
    }
  }

  .profile-image {
    border-radius: 50px;
    width: 200px;
  }
  .sns-image {
    width: 50px;
  }
}
</style>
