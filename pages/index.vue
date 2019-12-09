<template>
  <div class="container">
    <Header></Header>
    <section class="main">
      <div class="headA">
        <h1>{{ title }}</h1>
        <p :style="msgStyle">{{  message }}</p>
        <hr />
      </div>
      <AddButton v-on:click="addOn"></AddButton>
      <button v-o:click="addOn">TRY</button>
    </section>
  </div>
</template>

<script>
import  Header  from '@/components/header.vue';
import  AddButton  from '@/components/addButton.vue';

export default {
  data: function() {
    return {
      title: 'Hello',
      message: 'this is Timeline',
      msgStyle: {
        display: 'on'
      }
    };
  },
  methods: {
    doAction: function() {
      this.$store.state.counter++;
    },
    addOn: function() {
      this.messagae = "a";
    }
  },
  components: {
    Header,
    AddButton
  }
};
</script>

<style>
.container {
    display: flex;
    position: relative;
  }
  .sideA {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #fff;
    width: 200px;
    height: 100vh;
    flex-direction: column;
    position: relative;
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
