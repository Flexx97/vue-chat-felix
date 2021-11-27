<template>
  <div class="menu">
    <div class="avatar">
      <img src="@/assets/img/147144.png" alt="avatar">
    </div>
    <router-link to="/profile">Profile</router-link>
    <router-link to="/chats">Chats</router-link>
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
  .avatar img {
    border-radius: 50px;
    width: 100px;
    height: 100px;
  }
</style>
