import { defineComponent } from 'vue'
import { mapActions, mapState } from 'vuex'

import { GetLocalToken } from '@/modules-local-storage'

import InputSearch from '@/components/1-InputSearch/InputSearch.vue'
import ButtonEdit from '@/components/2-ButtonEdit/ButtonEdit.vue'

import './style.scss'

export default defineComponent({
  name: 'PageListContacts',
  components: {
    InputSearch,
    ButtonEdit
  },
  data() {
    return {
      token: GetLocalToken().access_token,
      idContact: '',
      selected: '',
      paramsFilter: '',
      isRotated: false
    }
  },
  async created() {
    await this.getAllContacts()
  },
  computed: {
    ...mapState('huggy', ['contacts'])
  },
  methods: {
    ...mapActions('huggy', ['ActionGetAllContact']),

    async getAllContacts() {
      await this.ActionGetAllContact({
        page: null,
        phpne: this.paramsFilter,
        email: this.paramsFilter
      })

      this.selected = ''
    },
    reverseData() {
      this.isRotated = this.isRotated ? false : true
      this.contacts.reverse()
      this.contacts = !this.contacts
    },
    updateValueSearch(val: string) {
      this.paramsFilter = val
    },

    openEditDialog(id: string) {
      this.idContact = id
      const modal = document.getElementById('editContact') as HTMLDialogElement
      modal.showModal()
    },

    openDetailsDialog(id: string) {
      this.idContact = id
      this.selected = id
      const modal = document.getElementById('detailsContact') as HTMLDialogElement
      modal.showModal()
    }
  }
})
