<script>
import {getCookie} from "../utils/api.js"

export default {
  name: "Home",
  data() {
    return {
      user: {}
    }
  },
  created () {
    this.user.id = getCookie("id")
    this.user.name = getCookie("user")
  }
};
</script>

<template>

  <div>
    <h1>Xin chao!</h1>
    <p>UserName: {{ user.name }}</p>
    <p>ID: {{ user.id }}</p>
  </div>
</template>

<style></style>