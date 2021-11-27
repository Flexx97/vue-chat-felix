<template>
  <div>
    <h1>Profile is Here</h1>
    <p>Change Your name</p>
    <div class="change">
      <h4>{{name}}</h4>
      <input type="text" placeholder="Your name" v-model="changeFirstName">
    </div>
    <button @click="saveChange">Сохранить</button>
  </div>
</template>

<script>
import {computed, onBeforeMount, ref} from "vue";
import {doc, setDoc, getFirestore, getDoc} from 'firebase/firestore'
import {getAuth} from "firebase/auth";


export default {
  setup() {
    const changeFirstName = ref('')
    const changeNickName = ref('')
    const firstName = ref('')
    let name = computed(() => {
      return firstName.value
    })
    onBeforeMount(getAuth().onAuthStateChanged(async(user) => {
      if (user) {
        const docRef = doc(getFirestore(), "users", getAuth().currentUser.displayName)
        const docSnap =  await getDoc(docRef)
        firstName.value = docSnap.data().firstName
      }
    }))

    const saveChange = () => {
        const user = getAuth().currentUser
        firstName.value = changeFirstName.value
      setDoc(doc(getFirestore(), 'users', getAuth().currentUser.displayName), {
        firstName: changeFirstName.value,
        email: user.email
      })
      changeFirstName.value = ''
    }


    return {
      changeFirstName,
      changeNickName,
      firstName,
      name,
      saveChange
    }
  }
}
</script>

<style scoped>
.change{
  display: flex;
  justify-content: center;
  align-items: center;
}
.change:first-child h4{
  padding-right: 10px;
}
</style>
