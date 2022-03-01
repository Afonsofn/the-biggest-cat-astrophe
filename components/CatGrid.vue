<template>
    <ul class="cat-grid">
        <li v-for="(cat, index) in cats" v-bind:key="index">
            <div class="cat-box" v-b-modal.modal-center @click="setModalCat(cat)">
                <p>See more...</p>
                <img :src="cat.url" />
            </div>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'CatGrid',
    props: ['cats'],
    methods: {
        setModalCat(cat) {
            this.$emit('setModalCat', cat)
        }
    }
}
</script>
