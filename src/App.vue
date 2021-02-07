<template>
  <div id="app">
    <MovieContainer />
  </div>
</template>

<script>
import MovieContainer from "@/components/MovieContainer";


export default {
  name: 'App',
  components: {
    MovieContainer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
