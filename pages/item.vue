<template>
    <li v-bind:class="{ 'is_do': item.is_do }" @click="done(item)">{{  item.title }}</li>
</template>
<script>
export default {
    props: ['item'],
    methods: {
        done(item) {
            item.is_done = !item.is_do;
        }
    },
}
</script>
<style scoped>
li {
    cursor: pointer;
}
li.is-do {
    text-decoration: line-through;
}
</style>