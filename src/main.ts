/* eslint-disable vue/multi-word-component-names */
import { createApp } from 'vue'
import App from '@/App.vue'

import router from '@/router/index.js'
import store from '@/store'
import axios from 'axios'
import VueAxios from 'vue-axios'

import AuthHuggy from 'contacts-modules-huggy/src/modules/1-AuthHuggy/AuthHuggy.vue'
import AddNewContact from 'contacts-modules-huggy/src/modules/2-AddNewContact/AddNewContact.vue'
import EditContact from 'contacts-modules-huggy/src/modules/3-EditContact/EditContact.vue'
import DeleteContact from 'contacts-modules-huggy/src/modules/4-DeleteContact/DeleteContact.vue'
import DetailsContact from 'contacts-modules-huggy/src/modules/5-DetailsContact/DetailsContact.vue'

import '@/assets/scss/style.scss'

import InputSearch from '@/components/1-InputSearch/InputSearch.vue'
import ButtonEdit from '@/components/2-ButtonEdit/ButtonEdit.vue'
import Avatar from '@/components/3-Avatar/AvatarUser.vue'
import LoadingHuggy from '@/components/4-Loading/LoadingHuggy.vue'

const app = createApp(App)

app.use(router)
app.use(store)
app.use(VueAxios, axios)

app.component('AuthHuggy', AuthHuggy)
app.component('AddNewContact', AddNewContact)
app.component('EditContact', EditContact)
app.component('DeleteContact', DeleteContact)
app.component('DetailsContact', DetailsContact)
app.component('InputSearch', InputSearch)
app.component('ButtonEdit', ButtonEdit)
app.component('Avatar', Avatar)
app.component('LoadingHuggy', LoadingHuggy)

app.mount('#app')
