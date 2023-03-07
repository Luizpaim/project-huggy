import { createApp } from 'vue'
import App from './App.vue'

import router from './router/index.js'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'

import './assets/scss/style.scss'

import AuthHuggy from 'modules-contacts-huggy/src/modules/1-AuthHuggy/AuthHuggy.vue'
import AddNewContact from 'modules-contacts-huggy/src/modules/2-AddNewContact/AddNewContact.vue'
import EditContact from 'modules-contacts-huggy/src/modules/3-EditContact/EditContact.vue'
import DeleteContact from 'modules-contacts-huggy/src/modules/4-DeleteContact/DeleteContact.vue'
import DetailsContact from 'modules-contacts-huggy/src/modules/5-DetailsContact/DetailsContact.vue'

const app = createApp(App)

app.use(router)
app.use(store)
app.use(VueAxios, axios)

app.component('AuthHuggy', AuthHuggy)
app.component('AddNewContact', AddNewContact)
app.component('EditContact', EditContact)
app.component('DeleteContact', DeleteContact)
app.component('DetailsContact', DetailsContact)
app.mount('#app')
