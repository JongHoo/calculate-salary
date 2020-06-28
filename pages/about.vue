<template lang="pug">
.about
  .image-wrapper(style="margin-bottom: 20px;")
    img.profile-image(src="@/assets/images/jhmg.jpeg")
  .sns-wrapper(@click="moveLinkedIn")
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

  .profile-image {
    border-radius: 50px;
    width: 200px;
  }
  .sns-image {
    width: 50px;
  }
}
</style>
