<template>
  <b-modal id="modal-center"class="modal fade" role='dialog' data-backdrop="false" centered hide-footer hide-header>
    <img :src="cat.url" class="modal-img" />
    <div class="info-wrapper">
      <p>Height: {{ cat.height }}</p>
      <p>Width: {{ cat.width }}</p>
      <p>Url: {{ cat.url }}</p>
    </div>
  </b-modal>
</template>

<script>
export default {
  props: ['cat'],
}
</script>
