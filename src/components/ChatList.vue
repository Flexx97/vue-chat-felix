<template>
    <div class="chat">
      <div class="chat-list-item" v-for="message in Messages">
        <router-link :to="'/chats/userChat?' + message.id.toString()">{{ message.body.users.filter( item => item !== user)[0] }}</router-link>
      </div>
    </div>
</template>

<script>
import {query, collection, getFirestore, where, getDocs} from "firebase/firestore";
import {computed, onBeforeMount, ref} from "vue";
import {getAuth} from "firebase/auth";

export default {
 setup() {
   const UserMessages = ref([])
   let userG = ref('')
   let Messages = computed(() => {
     return UserMessages.value
   })
   onBeforeMount(() => {
     const docSnap = query(collection(getFirestore(), 'chats'), where('users', 'array-contains', 'Flexx97'))
     const querySnapshot = async() => {
       await getDocs(docSnap).then(querySnapshot => {
       querySnapshot.forEach((doc) => {
         UserMessages.value.push({
           id: doc.id,
           body: doc.data()
         })
       })
     })}
     querySnapshot()

     getAuth().onAuthStateChanged(async(user) => {
       if (user) {
         userG.value = getAuth().currentUser.displayName
       }
     })
   })


   let user = computed(() => {
     return userG.value
   })



  return {
    Messages,
    user
  }
 }
}
</script>

<style scoped>
.chat-list-item{
  color: #000;
  border-bottom: 1px solid gray;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.chat{
  display: flex;
  flex-direction: column;
}

</style>
