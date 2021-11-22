<template>
  <div class="home">
    <home-menu></home-menu>
    <div class="allchats">
      <router-view></router-view>
      <h1 v-if="route.path === '/'">Выберите что-нибудь из пункта меню</h1>
    </div>

  </div>
</template>

<script>
import HomeMenu from "@/components/HomeMenu";
import {useRoute, useRouter} from "vue-router";

export default {
  setup() {
    const router = useRouter()
    const route = useRoute()
    console.log(route.path)

    return {
      route
    }
  },
  components: {
    HomeMenu,
  }
}
</script>
<style>
.home {
  display: flex;
  justify-content: space-between;
}
.allchats{
  min-width: 90%;
}
</style>
