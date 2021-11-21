<template>
  <div class="home">
     <h1>Home</h1>
    <button class="logout" @click="Logout">Logout</button>
  </div>
</template>

<script>

import {getAuth} from "firebase/auth";

export default {
  setup() {

    const Logout = () => {
      getAuth().signOut()
          .then(() => console.log('Signed out'))
          .catch(err => alert(err.code))
    }
    return {
      Logout
    }
  }
}
</script>
