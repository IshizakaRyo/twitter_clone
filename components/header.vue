<template>
    <section class="container">
        <div class="sideA"> 
            <router-link class="linkButton" to="/"><font-awesome-icon :icon="['fas', 'home']" />  Home</router-link>
            <router-link class="linkButton" to="/chatwork"><font-awesome-icon icon="comments"/>  ChatWork</router-link>
            <button id="reloadButton" @click="relode()" ></button><label for="reloadButton" class="reloadButton">Reloade</label>
            </div>
    </section>
</template>

<style scoped>
.container {
    display: flex;
    position: relative;
    margin-right: 200px;
  }
.sideA {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #fff;
    width: 200px;
    height: 100vh;
    flex-direction: column;
    position: fixed;
}
.linkButton {
    width: 150px;
    text-decoration: none;
    text-align: center;
    color: #000;
    background-color: #fff;
    padding: 5px;
    border-radius: 20px;
    font-size: 16pt;
}
.linkButton:hover {
    color: #7CB376;
}
#reloadButton {
    display: none;
}
.reloadButton {
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
<script>
export default {
    methods: {
        relode: function() {
            this.$router.go({path: this.$router.currentRoute.path, force: true})
        }
    },
}
</script>


