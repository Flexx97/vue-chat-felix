<template>
  <div class="menu">
    <h1>Avatar</h1>
    <router-link to="/chats">Chats</router-link>
    <router-link to="/profile">Profile</router-link>
    <button class="logout" @click="Logout">Logout</button>
  </div>
</template>

<script>
import {getAuth} from "firebase/auth";

export default {
  setup() {

    const Logout = () => {
      getAuth().signOut()
          .catch(err => alert(err.code))
    }
    return {
      Logout
    }
  }
}
</script>

<style>
  .menu{
    min-width: 10%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
</style>
