import type { IRequestGetAccessToken } from '@/services'
import { cryptoKey } from '@/utils'
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import { mapActions } from 'vuex'

import './style.scss'

export default defineComponent({
  name: 'PageLogin',
  created() {
    this.loading = true
    this.getAccessToken()
    this.loading = false
  },
  data() {
    return {
      clientId: import.meta.env.VITE_CLIENT_ID,
      payload: {
        grant_type: 'authorization_code',
        redirect_uri: import.meta.env.VITE_URL_CALLBACK,
        client_id: cryptoKey(import.meta.env.VITE_CLIENT_ID),
        client_secret: cryptoKey(import.meta.env.VITE_CLIENT_SECRET),
        code: ''
      } as IRequestGetAccessToken,
      loading: false
    }
  },
  methods: {
    ...mapActions('accessToken', ['ActionAccessToken']),

    async getAccessToken() {
      const route = useRoute()
      const currentUrl = route.fullPath.split('=')
      if (currentUrl[1]) {
        this.payload.code = currentUrl[1]

        await this.ActionAccessToken(this.payload).then(() => this.$router.push({ path: '/' }))
      }
    }
  }
})
