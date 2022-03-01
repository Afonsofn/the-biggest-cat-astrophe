<template>
  <main>
    <header>
      <h1>The biggest Cat-astrophe</h1>
      <i>“In ancient times cats were worshipped as gods; they have not forgotten this.”</i>
    </header>
    
    <section class="main-section">
      <ul v-if="!loading" class="cat-grid">
        <li v-for="(cat, index) in cats" v-bind:key="index">
          <div class="cat-box" v-b-modal.modal-center @click="modalCat = cat">
            <p>See more...</p>
            <img :src="cat.url" />
          </div>
        </li>
      </ul>

      <div v-else class="load">
         <b-spinner variant="primary" label="Spinning"></b-spinner>
      </div>
    </section>

    <b-modal id="modal-center"class="modal fade" role='dialog' data-backdrop="false" centered hide-footer hide-header>
      <img :src="modalCat.url" class="modal-img" />
      <div class="info-wrapper">
        <p>Height: {{ modalCat.height }}</p>
        <p>Width: {{ modalCat.width }}</p>
        <p>Url: {{ modalCat.url }}</p>
      </div>
    </b-modal>

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
export default {
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
    }
  },
  async mounted() {
    await this.fetchCatImages()
  }
}
</script>
