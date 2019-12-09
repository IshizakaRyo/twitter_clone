<template>
    <div>
        <div class="form">
            <form v-on:submit.prevent="add">
                <input v-model="name">
                <input v-model="message">
                <button>Add</button>
            </form>
        </div>
    </div>
</template>

<script>
export default ({
    data: function() {
        return {
            name: '',
            message: ''
        }
    },
    created: function() {
        this.$store.dispatch('tweets/init')
    },
    methods: {
        add() {
            this.$store.dispatch('tweets/add', this.name, this.message)
            this.name = '',
            this.message= ''
        }
    },
})
</script>