<template>
    <div class="container">
        <Header></Header>
        <section class="main">
            <div class="headA">
                <h1 class="pageTitle">{{ title }}</h1>
                <p class="pageSubTitle">{{ message }}</p>
                <hr>
            </div>
        <ul v-for="(data, key) in json_data">
            <li class="listData">
                <div class="dataBox"> 
                    <p class="dataTime">{{ key }}</p>
                    <p class="dataName">投稿者：{{ data.name }} </p>
                    <p class="dataMessage">{{ data.content }}</p>
                </div>
            </li>
        </ul>

    
        <div class="screenOn" v-on:click="screenOn">+</div>
        
        <!-- 投稿を追加する表示 -->
        <div class="addScreen" :style="style">
            <div class="container">
                <div class="closeButtonWrap" v-on:click="screenOff()"> 
                    <p class="closeButton">x cancel</p>
                    <p class="closeButton" v-on:click="screenOff() && reset()">x comp</p>
                </div>
                <div class="inputsWrap">
                    <!-- DBのキー -->
                    <input v-model="email" type="hidden">
                    <!-- 投稿者の入力 -->
                    <p>Name</p>
                    <input v-model="username">
                    <!-- 内容の入力 -->
                    <p>Message</p>
                    <textarea v-model="content" maxlengt="100" cols="60" rows="5"></textarea>
                </div>
                <button id="addPost" @click="addData()"></button>
                <label for="addPost" class="addPost">Submit</label>
            </div>
        </div>
        </section>
    </div>
</template>

<script>
const axios = require('axios');
import moment from 'moment';
import  Header  from '@/components/header.vue';

let url = "https://clone-twitter-91d23.firebaseio.com/person.json";
let urlIn = "https://clone-twitter-91d23.firebaseio.com/person";

export default {
    data: function() {
        return {
            title: 'Chatwork',
            message: 'talk with friends!',
            style: {
                display: 'none'
            },
            email: this.timestamp(),
            username: '',
            content: '',
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
                'content': this.content
            };
            axios.put(add_url, data).then((re)=>{
                this.email = '';
                this.username = '';
                this.content = '';
                this.getData();
            });
        },
        timestamp: function() {
            return moment().format('DD HH:mm:ss');
        },
        reset: function () {
            this.$router.go({path: this.$router.currentRoute.path, force: true})
        }
    },
    components: {
        Header,
  }
}
</script>
<style scoped>

.container {
    position: relative;
    display: flex;
    padding: 5px 10px;
}
.pageTitle {
  font-size: 60pt;
  color: #345980;
}
.pageSubTitle {
  padding-top: 5px;
  font-size: 20pt;
}
hr {
  margin: 10px 0px;
}
.main {
  width: 100em;
  position: relative;
}
.conA {
  position: relative;
  flex-direction: column;
  flex-wrap: wrap;
}
.closeButtonWrap {
    overflow: hidden;
}
.closeButton {
    font-size: 20px;
    float: left;
    margin-right: 50px;
}
.headA {
  width: 100%;
}
/* 投稿されたデータ */
.listData {
    list-style: none;
}
.dataBox {
    margin-bottom: 20px;
}
.dataTime {
    font-size: 15px;
    color: #A1ACB3;
}
.dataName {
    font-size: 20px;
}
.dataMessage {
    font-size: 30px;
}
/* 投稿スクリーン */
.addScreen {
    position: fixed;
    background:rgba(0, 0, 0, .4);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
.addScreen .container {
    background-color: #fff;
    display: block;
    width: 500px;
    height: 300px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 18%;
    border: #7CB376 solid 5px;
    border-radius: 10px;
}

/* 右下のプラスボタン */
.screenOn {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #7CB376;
    text-align: center;
    line-height: 50px;
    color: #fff;
    font-size: 30px;
    position: fixed;
    top: 750px;
    right: 50px;
}
.screenOn:hover {
    background-color: #3E6639;
    color: #B3A1A1;
}
.inputsWrap {
    margin-top: 20px;
    margin-bottom: 30px;
}
/* Submitボタン */
#addPost {
    display: none;
}
.addPost {
    display: block;
    width: 80px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    background-color: #7CB376;
    color: #fff;
}
.addPost:hover {
    background-color:#3E6639;
    color: #7CB376;
}

</style>
