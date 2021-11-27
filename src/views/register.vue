<template>
  <div class="register">
    <h1>Register</h1>
    <h4>{{error}}</h4>
    <form @submit.prevent="Register" class="nachos">
      <h5>Your Email</h5>
      <input type="text" placeholder="Email" v-model="email">
      <h5>Your Pass</h5>
      <input type="password" placeholder="Password" v-model="pass">
      <h5>Your Nick name</h5>
      <input type="text" placeholder="Nick Name" v-model="nick">
      <h5>Your first name</h5>
      <input type="text" placeholder="First Name" v-model="firstName">
      <input type="submit" value="Register">
      <p>Have an account? <router-link to="/login" >Login Here</router-link></p>
    </form>
  </div>
</template>

<script>
import {ref} from "vue";
import {getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {doc, getFirestore, setDoc} from "firebase/firestore";


export default {

  setup() {
    const email = ref('')
    const pass = ref('')
    const nick = ref('')
    const error = ref('')
    const firstName = ref('')
    const auth = getAuth();
    const Register = () =>  {
      createUserWithEmailAndPassword(auth, email.value, pass.value)
        .then((userCredential) => {
          updateProfile(userCredential.user, {
            displayName: nick.value
          })
          setDoc(doc(getFirestore(), 'users', nick.value), {
            firstName: firstName.value,
            email: email.value
          })
        })
        .catch((err) => {
          error.value = err.code.split('/')[1]
        })

    }

    return {
      Register,
      email,
      pass,
      firstName,
      nick,
      error
    }
  }
}
</script>

<style scoped>
.nachos{
  display: flex;
  flex-direction: column;
  align-items: center;
}
h5{
  margin: 0;
}
h4{
  color: red;
}
</style>
