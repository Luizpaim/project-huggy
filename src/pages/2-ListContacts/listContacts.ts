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
      idContact: ''
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

    async getAllContacts(name?: string, email?: string) {
      await this.ActionGetAllContact({ page: 0 })
    },
    openEditDialog(id: string) {
      this.idContact = id
      const modal = document.getElementById('editContact') as HTMLDialogElement
      modal.showModal()
    }
  }
})
