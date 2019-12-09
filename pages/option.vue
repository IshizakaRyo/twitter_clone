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
    </section>
</template>

<script>
export default {
    data: function() {
        return {
            title: 'Hello',
            message: 'this is message.',
        };
    },
    methods: {
        doAction: function() {
            this.$store.state.counter++;
        }
    }
};
</script>

<style>
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
</style>

f