<template>
    <section class="container">
        <div class="container">
            <div class="sideA"> 
            <router-link class="linkButton" to="/"><font-awesome-icon :icon="['fas', 'home']" />  Home</router-link>
            <router-link class="linkButton" to="/chatwork"><font-awesome-icon icon="comments"/>  ChatWork</router-link>
            <router-link class="linkButton" to="/myspace"><font-awesome-icon icon="male"/>  MySpace</router-link>
            <router-link class="linkButton" to="/option"><font-awesome-icon :icon="['fas', 'cog']" />  Option</router-link>
            <button id="tweetButton"></button><label for="tweetButton" class="tweetButton">Tweet</label>
            </div>
        </div>
        <div>
            <h1>{{ title }}</h1>
            <p>{{ message }}</p>
            <hr />
        </div>
    </section>
</template>

<script>
import  Header  from '@/components/header.vue';

export default {
    data: function() {
        return {
            title: 'ChatWork',
            message: '~友達と楽しくおしゃりベりしよう！'
        };
    },
}
</script>

<style>
.container {
    display: flex;
  }
  .sideA {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #fff;
    width: 200px;
    height: 100vh;
    flex-direction: column;
  }
  .linkButton {
    width: 150px;
    text-decoration: none;
    text-align: center;
    color: #000;
    background-color: #fff;
    padding: 5px;
    border-radius: 20px;
  }
  .linkButton:hover {
    color: #7CB376;
  }
#tweetButton {
    display: none;
}
.tweetButton {
    background-color: #7CB376;
    color: #fff; 
    width: 180px;
    height: 45px;
    text-align: center;
    line-height: 45px;
    border-radius: 20px;
    font-weight: bold;
}
</style>