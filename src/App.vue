<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view
      class="view"
      keep-alive
      transition
      transition-mode="out-in">
    </router-view>
    <p>
      <!-- 使用 router-link 组件来导航. -->
      <!-- 通过传入 `to` 属性指定链接. -->
      <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
      <router-link to="/home">Go to Home</router-link>
      <router-link to="/me">Go to Me</router-link>
    </p>

  </div>
</template>

<script>
  export default {
    name: 'app',
    components: {}
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
