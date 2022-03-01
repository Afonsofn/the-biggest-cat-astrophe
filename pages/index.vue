<template>
  <main>
    <header>
      <h1>The biggest Cat-astrophe</h1>
      <i>“In ancient times cats were worshipped as gods; they have not forgotten this.”</i>
    </header>
    
    <section class="main-section">
      <cat-grid v-if="!loading" :cats="cats" @setModalCat="setModalCat" />

      <div v-else class="load">
         <b-spinner variant="primary" label="Spinning"></b-spinner>
      </div>
    </section>

    <modal-cat :cat="modalCat" />

    <footer>
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="my-table"
      ></b-pagination>
    </footer>
  </main>
</template>

<script>
import ModalCat from '../components/ModalCat.vue'
import CatGrid from '../components/CatGrid.vue'

export default {
  name: 'Home',
  components: {
    'modal-cat': ModalCat,
    'cat-grid': CatGrid,
  },
  data() {
    return {
      cats: [],
      modalCat: {},
      perPage: 6,
      rows: 1000,
      currentPage: 1,
      loading: true,
    }
  },
  watch: {
    currentPage: function() {
        this.fetchCatImages();
    },
  },
  methods: {
    async fetchCatImages() {
      try {
        this.loading = true

        const { data } = await this.$axios.get('/search',
          { 
            params: {
              limit: this.perPage,
              page: this.currentPage,
              order: 'Asc',
            }
          }
        )

        this.cats = data
      } catch (_error) {
        this.cats = []
      } finally {
        this.loading = false
      }
    },
    setModalCat(cat) {
      this.modalCat = cat
    },
  },
  async mounted() {
    await this.fetchCatImages()
  }
}
</script>
