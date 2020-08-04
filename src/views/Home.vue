<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div class="button">
      <van-button type="primary">主要按钮</van-button>
      <van-button type="info">信息按钮</van-button>
      <van-button type="default">默认按钮</van-button>
      <van-button type="warning">警告按钮</van-button>
      <van-button type="danger">危险按钮</van-button>
    </div>
    <div class="container">
      <p class="con_p">Hello</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  }
}
</script>
<style scoped>
  .con_p {
    font-size: 28px;
  }
</style>
