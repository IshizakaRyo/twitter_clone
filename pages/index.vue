<template>
  <div class="container">
    <Header></Header>
    <section class="main">
      <div class="headA">
        <h1>{{ title }}</h1>
        <p :style="msgStyle">{{  message }}</p>
        <hr />
      </div>

      <div>
        <h2>このページはSPAの練習として作りました。</h2>
        <p>ヘッダーからうまくchatworkスペースに遷移できるかな？？</p>
      </div>
    </section>
  </div>
</template>

<script>
import  Header  from '@/components/header.vue';


export default {
  data: function() {
    return {
      title: 'Home',
      message: 'This is test space.',
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
    Header
  }
};
</script>

<style>
.container {
    display: flex;
    position: relative;
    padding: 5px 10px;
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
