<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p @click="titleClick">文字提示</p>
    <p @click="loadingClick">加载提示</p>
    <div class="article">
      文章内容
    </div>
  </div>
</template>
<script>
import { articleList } from '@/api'
export default {
  name: 'About',
  methods: {
    titleClick () {
      this.$toast('Hello')
    },
    loadingClick () {
    this.$toast.loading({
      message: '加载中',
      forbidClick: true,
      overlay: true,
    })
  }
  },
  created () {
    const params = {
      current: '000',
      pageSize: 10
    }
    articleList(params).then(res => {
      console.log(res)
    })
  }
}
</script>>
<style lang="less" scoped>
  .article {
    width: 600px;
    height: 600px;
    background-color:pink;
  }
</style>
