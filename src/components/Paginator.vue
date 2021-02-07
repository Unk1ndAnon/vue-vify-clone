<template>
  <div>
    <nav aria-label="Page navigation example">
      <ul class="pagination pagination-sm justify-content-center">
        <li class="page-item" :class="[prevPageDisable() ? 'disabled' : '']" @click="changePage(currentPage - 1)">
          <a class="page-link" href="#" tabindex="-1">Prev</a>
        </li>
        <li v-for="index in pageCount()" :class="[currentPage === index ? 'active' : '']" @click="changePage(index)" :key="index" class="page-item">
          <a  class="page-link" href="#">{{ index }}</a>
        </li>
        <li class="page-item" :class="[nextPageDisable() ? 'disabled' : '']"  @click="changePage(currentPage + 1)">
          <a class="page-link" href="#">Next</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Paginator",
  props: ['totalCount', 'perPage'],
  data() {
    return {
      currentPage: 1
    }
  },
  methods: {
    changePage(pageNum) {
      this.currentPage = pageNum
      this.$emit('fetchData', pageNum)
    },
    pageCount() {
      return Math.round(this.totalCount / this.perPage)
    },
    prevPageDisable() {
      return this.currentPage === 1 || this.totalCount === 10;
    },
    nextPageDisable() {
      return this.currentPage === this.pageCount();
    }
  }
}
</script>

<style scoped>

</style>