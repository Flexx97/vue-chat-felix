<template>
  <div class="Chats">
    <div class="nav-chats">
      <div class="search">
        <input type="text" placeholder="Search users">
      </div>
      <div class="chat">
        <div class="chat-list-item">
          <router-link to="/chats/userChat?id">Flexx97</router-link>
        </div>
        <div class="chat-list-item">
          <router-link to="/chats/userChat?id">FullWidth</router-link>
        </div>
      </div>
    </div>
    <router-view></router-view>

  </div>
</template>

<script>
import {useRoute} from "vue-router";

export default {
  setup() {
    const route = useRoute()
    return {
      route
    }
  }
}
</script>

<style scoped>
.Chats {
  display: flex;
  justify-content: space-between;
}
.nav-chats{
  background: #fff;
  border-right: 10px;
  width: 10%;
  border-radius: 10px;
}
.chat{
  display: flex;
  flex-direction: column;
}

.search{
  margin-bottom: 20px;
}
.chat-list-item{
  color: #000;
  border-bottom: 1px solid gray;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
