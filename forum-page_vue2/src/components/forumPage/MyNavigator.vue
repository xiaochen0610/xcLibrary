<template>
  <div class="navigator">
    <div class="navigator-left">

      <img src="../../../public/image/back.png" alt='' />
      <div class="navigator-left-title">???</div>
    </div>
    <div class="navigator-right">
      <span>进论坛</span>
      <img src='../../../public/image/more.png' alt='' />
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyNavigator',

  // props: {
  //   msg: String
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navigator {
  display: flex;
  position: fixed;
  top: 0px;
  left: 0;
  right: 0;
  font-size: 17px;
  height: 50px;
  border-bottom: 1px solid #ebe7e7;
  background-color: white;
}

.navigator-left {
  display: flex;
  line-height: 50px;
}

.navigator-left-title {
  min-width: 25px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.navigator-left>img {
  height: 24px;
  margin: 13px;
}

.navigator-right>img {
  height: 36px;
  margin: 7px;
}

button {
  border: #ebe7e7;
  background-color: #fff;
}

.navigator-right {
  display: flex;
  font-weight: 700;
  color: #7ba77f;
  margin-left: auto;
  line-height: 50px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
