<template>
  <div id="login-view">
    <h1>{{ msg }}</h1>

    <form class="login-input">
      <input class="username" name="name" placeholder="账号">
      <input class="password" name="password" placeholder="密码">
    </form>

    <keyboard class="login-keyboard"></keyboard>

    <div class="login-button">
      <button class="login">登录</button>
    </div>

  </div>


</template>

<script>
  import Keyboard from '../../template/keyboard.vue'
  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome！'
      }
    },
    components: {
      Keyboard
    }

  }
</script>

<style>
  #login-view {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  form.login-input {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    width: 500px;
  }

  form.login-input > input {
    height: 40px;
    padding-left: 15px;
  }

  .login-keyboard {
    margin-top: 20px;
    width: 500px;
    height: 90px;
  }

  .login-button {
    margin-top: 20px;
    width: 500px;
  }

  .login-button > button {
    width: 100%;
    height: 50px;
    background-color: #cc0000;
    border: none;
    border-radius: 5px;
    color: #ffffff;
    font-size: 14px;
  }

</style>
