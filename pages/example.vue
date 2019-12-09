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
    position: relative;
  }
  .headA {
  width: 100%;
}
a {
  font-size:  16pt;
}
.link {
  background-color: #def;
  padding: 10px;
}
.container {
  padding: 5px 10px;
}
h1 {
  font-size: 60pt;
  color: #345980;
}
p {
  padding-top: 5px;
  font-size: 20pt;
}
pre {
  padding: 10px;
  font-size: 18pt;
  background-color: #efefef;
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
.addButton .container {
  background-color: #7CB376;
  width: 50px;
  height: 50px;
  border-radius: 50%;  
  text-align: center;
  position: fixed;
  top: 750px;
  right: 50px;
}
.addButton p {
  width: 50px;
  height: 25px;
  line-height: 25px;
  font-size: 30px;
  text-align: center;
  color: #fff;
}
</style>