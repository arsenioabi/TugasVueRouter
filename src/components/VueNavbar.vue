<template>
  <ul>
      <li><router-link class="active" to="/about">About Me</router-link></li>
      <li><router-link to="/contact">Contact Me</router-link></li>
      <li><router-link to="/todolist">To Do List</router-link></li>
  </ul>
</template>

<script>
export default {

}
</script>

<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover:not(.active) {
  background-color: #111;
}

.active {
  background-color: #04AA6D;
}
</style>
