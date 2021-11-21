<template>
  <div class="register">
    <h1>Register</h1>
    <form @submit.prevent="Register">
      <input type="text" placeholder="Email" v-model="email">
      <input type="password" placeholder="Password" v-model="pass">
      <input type="submit" value="Register">
      <p>Have an account? <router-link to="/login" >Login Here</router-link></p>
    </form>
  </div>
</template>

<script>
import {ref} from "vue";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";


export default {

  setup() {
    const email = ref('')
    const pass = ref('')
    const auth = getAuth();
    const Register = () =>  {
      createUserWithEmailAndPassword(auth, email.value, pass.value)
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode)
          console.log(errorMessage)
        });}
    // const Register = () => {
    //   const auth = getAuth()
    //   createUserWithEmailAndPassword(auth, email.value, pass.value)
    //   .then(userCredential => {
    //     const user = userCredential.user
    //     alert(user)
    //   })
    //   .catch(err => console.log(err.code))
    // }

    return {
      Register,
      email,
      pass
    }
  }
}
</script>

<style>

</style>
