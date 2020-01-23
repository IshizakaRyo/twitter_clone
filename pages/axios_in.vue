<template>
    <section class="container">
        <h1>{{ title }}</h1>
        <p>{{ message }}</p>
        <table>
            <tr>
                <th>Email</th>
                <td><input v-model="email"></td>
            </tr>
            <tr>
                <th>username</th>
                <td><input v-model="username"></td>
            </tr>
            <tr>
                <th>Gmail</th>
                <td><input v-model="gmail"></td>
            </tr>
            <tr><th></th><td>
                <button @click="addData">Click</button>
            </td></tr>
        </table>
        <hr>
        <ul v-for="(data, key) in json_dataAll">
            <li><strong>{{ key }}</strong><br>{{ data }}</li>
        </ul>
         <router-link class="linkButton" to="/axios">全体へ</router-link>
    </section>
</template>

<script>
const axios = require('axios');
import moment from 'moment';
let url = "https://clone-twitter-91d23.firebaseio.com/person";
let urlAll = "https://clone-twitter-91d23.firebaseio.com/person.json";
export default {
    data: function() {
        return {
            title: 'Axios',
            email: '',
            username: '',
            gmail: '',
            time: '',
            message: 'axios sample.',
            json_data: {}
        };
    },
    methods: {
        addData: function() {
            let add_url = url + '/' + this.email + '.json';
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
        getData: function() {
            axios.get(url + '.json').then((res) => {
                this.messsage = 'get all data.';
                this.json_data = res.data;
            }).catch((error)=>{
                this.messsage = 'ERROR!';
                this.json_data = {};
            });
        },
        timestamp: function() {
             return moment().format('YYYY/MM/DD HH:mm');
        },
        created: function() {
            this.getData();
        }
    },
    filters: {
        moment: function(date) {
            return moment(date).format('YYYY/MM/DD HH:mm');
        }
    },
    asyncData: async function() {
        let result = await axios.get(urlAll);
        return {json_dataAll: result.data}
    },
}
</script>