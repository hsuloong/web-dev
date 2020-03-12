<template>
  <div>
    <h2>Profile:</h2>
    <h3>Name:{{name}}</h3>
    <h3>Age:{{age}}</h3>
  </div>
</template>

<script>
export default {
  name: "Profile",
  data() {
    return {
      name: this.$route.query.name,
      age: this.$route.query.age
    }
  }
}
</script>