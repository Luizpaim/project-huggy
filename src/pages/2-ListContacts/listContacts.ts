import { defineComponent } from 'vue'
import { mapActions, mapState } from 'vuex'

import InputSearch from '@/components/1-InputSearch/InputSearch.vue'

import './style.scss'

export default defineComponent({
  name: 'PageListContacts',
  components: {
    InputSearch
  },
  data() {
    return {
      cursor: false,
      alert: {
        message: '',
        type: '',
        visible: false
      },
      delay: (ms: number) => new Promise((res) => setTimeout(res, ms))
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
    }
  }
})
