<template>
  <div id="nav">
    <router-view></router-view>
  </div>
</template>

<script>
import {useRoute, useRouter} from "vue-router";
import {onBeforeMount} from "vue";
import {getAuth} from 'firebase/auth'
export default {
  setup() {
    const router = useRouter()
    const route = useRoute()


    onBeforeMount(() => {
      getAuth().onAuthStateChanged((user) => {
        if(!user) {
          router.replace('/login')
        } else if (route.path === '/login' || route.path === '/register') {
          router.replace('/')
        }
      })
    })
  }
}
</script>

<style>
body{
  background: #2c3e50;
  color: #fff;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

a{
  color: inherit;
}

</style>
