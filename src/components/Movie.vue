<template>
  <div class="card my-3 mx-2" style="max-width: 540px;">
    <div class="row g-0">
      <div class="col-md-4">
        <img :src="movie.medium_cover_image" class="card-img-top" :alt="movie.title">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title"> {{ movie.title }} </h5>
          <p class="card-text"> {{ movie.synopsis.substring(0, 200) }} </p>
          <a :href="movie.url" target="_blank" class="card-text"><small class="text-muted">Checkout Movie</small></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Movie",
  props: ['movie']
}
</script>

<style scoped>

</style>