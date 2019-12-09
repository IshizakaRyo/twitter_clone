<template>
    <section class="container">
        <h1>{{ title }}</h1>
        <p>{{ message }}</p>
        <p class="btn" @click="reset()">リセット</p>
        <ul v-for="(data, key) in json_data">
            <li class="listData">
                <div class="dataBox"> 
                <p>{{ data.name }} </p>
                <p>{{ key }}</p>
                <p>{{ data.time }}</p>
                <p>{{ data.email }}</p>
                </div>
            </li>
        </ul>

        <button v-on:click="screenOn">+</button>
        <div class="addScreen" :style="style">
            <div class="container">
                <div v-on:click="screenOff">XXX</div>
                <p>Email</p>
                <input v-model="email"　type="hidden">
                <p>Name</p>
                <input v-model="username">
                <p>Gmail</p>
                <input v-model="gmail">
                <button @click="addData">Click</button>
                <p>こんにちは！</p>
            </div>
        </div>
    </section>
</template>

<script>
const axios = require('axios');
import moment from 'moment';

let url = "https://clone-twitter-91d23.firebaseio.com/person.json";
let urlIn = "https://clone-twitter-91d23.firebaseio.com/person";

export default {
    data: function() {
        return {
            title: 'Axios',
            message: 'sample axios',
            style: {
                display: 'none'
            },
            email: this.timestamp(),
            username: '',
            gmail: '',
            time: '',
            json_data: {}
        };
    },
    asyncData: async function() {
        let result = await axios.get(url);
        return {json_data: result.data}
    },
    methods: {
        screenOn: function() {
            return this.style.display = 'block'
        },
        screenOff: function() {
            return this.style.display = 'none'
        },
        addData: function() {
            let add_url = urlIn + '/' + this.email + '.json';
            let data = {
                'name': this.username,
                'email': this.gmail,
                'time': this.timestamp()
            };
            axios.put(add_url, data).then((re)=>{
                this.email = '';
                this.username = '';
                this.gmail = '';
                this.time = '';
                this.getData();
            });
        },
        timestamp: function() {
            return moment().format('DD HH:MM:SS');
        },
        reset: function () {
            this.$router.go({path: this.$router.currentRoute.path, force: true})
        }
    },
}
</script>
<style scoped>
.container {
    position: relative;
}
.listData {
    list-style: none;
}
.addScreen {
    position: fixed;
    background:rgba(0, 0, 0, .4);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
.addScreen .container {
    background-color: blue;
    display: block;
    width: 500px;
    height: 200px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20%;
}
.dataBox {
    margin-bottom: 10px;
}
</style>
