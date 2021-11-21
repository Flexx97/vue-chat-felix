<template>
  <div id="nav">
    <router-view></router-view>
    <button class="logout" @click="Logout">Logout</button>
  </div>
</template>

<script>
import {useRoute, useRouter} from "vue-router";
import {onBeforeMount, ref} from "vue";
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
