<template>
  <div class="login">
  <h1>Login</h1>
    <form @submit.prevent="Login">
      <input type="text" placeholder="Email" v-model="email">
      <input type="password" placeholder="Password" v-model="pass">
      <input type="submit" value="Login">
      <p>Need an account? <router-link to="/register" >Register Here</router-link></p>
    </form>
  </div>
</template>

<script>

import {ref} from "vue";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";

export default {
  setup() {
    const email = ref('')
    const pass = ref('')

    const Login = () => {
      const auth = getAuth()
      signInWithEmailAndPassword(auth, email.value, pass.value)
      .then(data => console.log(data))
      .catch(err => alert(err.message))
    }
    return {
      Login,
      email,
      pass
    }
  }

}
</script>

<style>

</style>
