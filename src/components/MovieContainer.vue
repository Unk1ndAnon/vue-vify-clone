<template>
  <div class="container">
    <form>
      <div class="row">
        <div class="col-6 offset-3">
          <div class="form-group">
            <input v-model="searchTerm" type="text" placeholder="Star wars" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
          </div>
        </div>
        <div class="col-1">
          <button @click.prevent="onSubmit" class="btn btn-primary">
            <span v-if="this.isLoading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            Search
          </button>
        </div>
      </div>

      <div class="row">
        <div class="col-3 offset-3">
          <div class="form-group">
            <select v-model="rating" class="form-select form-control" aria-label="Default select example">
              <option value="" disabled>Rating</option>
              <option v-for="r in ratings" :key="r" :value="r">{{ r }}</option>
            </select>
          </div>
        </div>

        <div class="col-3">
          <div class="form-group">
            <select v-model="genre" class="form-select form-control" aria-label="Default select example">
              <option value="" disabled>Genre</option>
              <option v-for="g in genres" :key="g" :value="g">{{ g }}</option>
            </select>
          </div>
        </div>
      </div>
    </form>

    <div class="row">
      <Paginator v-if="this.moviesPresent" :totalCount="this.totalCount" :perPage="10" @fetchData="fetchMovies"/>
    </div>

    <div class="row">
      <Movie v-for="movie in this.movies" :key="movie.id" :movie="movie" />
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import Movie from "@/components/Movie";
import Paginator from "@/components/Paginator";

export default {
  name: "MovieContainer",
  data () {
    return {
      searchTerm: '',
      rating: '',
      genre: '',
      page: 1
    }
  },
  components: {
    Movie,
    Paginator
  },
  mounted() {
    // this.$store.dispatch('listMovies')
  },
  computed: {
    ...mapState(['movies', 'isLoading', 'totalCount']),
    ...mapGetters(['moviesPresent']),
    ratings () {
      return [1, 2, 3, 4, 5, 6, 7, 8, 9]
    },
    genres () {
      return ['action', 'adventure', 'animation', 'biography']
    }
  },
  methods: {
    onSubmit() {
      const searchParams = {
        query_term: this.searchTerm,
        rating: this.rating,
        genre: this.genre,
        limit: 10
      }
      this.$store.dispatch('listMovies', searchParams)
    },
    fetchMovies(page) {
      console.log('page number', page)
      const searchParams = {
        query_term: this.searchTerm,
        rating: this.rating,
        genre: this.genre,
        page: page,
        limit: 10
      }
      this.$store.dispatch('listMovies', searchParams)
    }
  }
}
</script>

<style scoped>

</style>