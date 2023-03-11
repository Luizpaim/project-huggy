import { defineComponent } from 'vue'
import { mapActions, mapState } from 'vuex'

import { GetLocalToken } from '@/modules-local-storage'

import './style.scss'

export default defineComponent({
  name: 'PageListContacts',

  data() {
    return {
      token: GetLocalToken().access_token,
      idContact: '',
      selected: '',
      paramsFilter: '',
      isRotated: false,
      loading: false
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
      this.loading = true
      await this.ActionGetAllContact({
        page: null,
        filter: this.paramsFilter
      })

      this.selected = ''
      this.loading = false
    },
    reverseData() {
      this.loading = true
      this.isRotated = this.isRotated ? false : true
      this.contacts.reverse()
      this.contacts = !this.contacts
      this.loading = false
    },
    updateValueSearch(val: string) {
      this.paramsFilter = val
    },

    openEditDialog(id: string) {
      this.idContact = id
      const modal = document.getElementById('editContact') as HTMLDialogElement
      modal.showModal()
    },

    openDeleteDialog(id: string) {
      this.idContact = id
      const modal = document.getElementById('deleteContact') as HTMLDialogElement
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
