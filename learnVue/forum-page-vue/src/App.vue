<script setup>
import Vue from 'vue'
import { RouterLink } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Navigator from './components/forumPage/Navigator.vue'
import User from './components/forumPage/User.vue'

import request from './utils/request'

const app = Vue.createApp({
  data() {
    return {
      title: '标题'
      // request().then((data) => {
      //   data.config.quan_info.title
      // })
    }
  }
})
app.mount('#app')






</script>

<template>
  <div className="app">
    <Navigator title="title" />
    <div className='app-page'>
      <User />
      <!-- <Page/> -->
      <!-- <Commend /> -->
    </div>
    <ReplyBar />
  </div>

  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->
</template>

<style scoped>
.app {
  display: flex;
  flex: initial;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;

  /* height: 100%; */
}

.app-page {
  margin: 75px 0 60px 0;
  /* overflow: auto */
}
</style>
