<template>
  <div>
    <h3>UserName:{{userName}}</h3>
    <router-link to="/user/color">颜色</router-link>
    <router-link to="/user/food">食物</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "User",
  computed: {
    userName() {
      return this.$route.params.userName
    }
  },
  created() {
    document.title = "User Page"
  }
}
</script>

<style scoped>

</style>