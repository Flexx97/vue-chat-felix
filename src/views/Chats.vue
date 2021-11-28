<template>
  <div class="Chats">
    <div class="nav-chats">
      <div class="search">
        <input type="text" placeholder="Search users">
      </div>
      <chat-list></chat-list>
    </div>
    <router-view></router-view>

  </div>
</template>

<script>
import ChatList from "@/components/ChatList";
export default {
  setup() {

  },
  components: {
    ChatList
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
.search{
  margin-bottom: 20px;
}

</style>
