<template>
  <div id="app">
    <MyNavigator msg="Welcome to Your Vue.js App" />
    <div class='app-page'>
      <MyUser />
      <MyPage />
      <MyCommend />
    </div>
    <ReplyBar />
  </div>
</template>

<script>
import MyNavigator from './components/forumPage/MyNavigator.vue'
import MyUser from './components/forumPage/MyUser.vue'
import MyPage from './components/forumPage/page/MyPage.vue'
import MyCommend from './components//forumPage/commend/MyCommend.vue'


export default {
  name: 'App',
  components: {
    MyNavigator,
    MyUser,
    MyPage,
    MyCommend
  }
}
</script>

<style>
#app {
  /* display: flex; */
  /* flex: initial; */
  /* flex-direction: column; */
  justify-content: flex-start;
  align-items: stretch;

  /* height: 100%; */
}

.app-page {
  margin: 75px 0 60px 0;

  /* overflow: auto */
}
</style>
