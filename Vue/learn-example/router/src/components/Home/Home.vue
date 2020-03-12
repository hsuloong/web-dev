<template>
  <div>
    <h2>Home Page:{{messgae}}</h2>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      messgae: "Home Update"
    }
  },
  created() {
    document.title = "Home Page"
  },
  mounted() {
    console.log("mounted")
  },
  updated() {
    console.log("updated")
  }
}
</script>