import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyDlwzWLMwq-oEmK2pX9nmnRwuUT7LI1y0A",
    authDomain: "vue-chat-felix.firebaseapp.com",
    projectId: "vue-chat-felix",
    storageBucket: "vue-chat-felix.appspot.com",
    messagingSenderId: "1047557745530",
    appId: "1:1047557745530:web:6898ef6f6e36edbca404c3"
}

initializeApp(firebaseConfig)
const db = getFirestore()

createApp(App).use(store).use(router).mount('#app')
