<template>
    <div class="container">
        <Header></Header>
        <section class="main">
            <div class="headA">
                <h1 class="pageTitle">タイトル</h1>
                <hr>
            </div>
            <div class="conA">
                <div class="conAContainer" id="app">
                    
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import  Header  from '@/components/header.vue';
import Item from './item.vue';

export default {
    components: {
        Header
    }
}

</script>

<style scoped>
.container {
    position: relative;
    display: flex;
    padding: 5px 10px;
}
/* headA */
.main {
  width: 100em;
  position: relative;
}
.headA {
  width: 100%;
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

</style>

