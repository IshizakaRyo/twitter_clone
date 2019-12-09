<template>
    <section class="container">
        <div class="sideA"> 
            <router-link class="linkButton" to="/"><font-awesome-icon :icon="['fas', 'home']" />  Home</router-link>
            <router-link class="linkButton" to="/chatwork"><font-awesome-icon icon="comments"/>  ChatWork</router-link>
            <router-link class="linkButton" to="/myspace"><font-awesome-icon icon="male"/>  MySpace</router-link>
            <router-link class="linkButton" to="/option"><font-awesome-icon :icon="['fas', 'cog']" />  Option</router-link>
            <button id="tweetButton"></button><label for="tweetButton" class="tweetButton">Tweet</label>
            </div>
    </section>
</template>


