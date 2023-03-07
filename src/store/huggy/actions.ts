import { Contacts } from '@/services/huggy/Contacts'
import type { ActionContext } from 'vuex'
import { SET_CONTACT } from './mutationsType'
import type { IState } from './state'

const contacts = new Contacts()

export const actions = {
  ActionGetAllContact: async (
    { commit }: ActionContext<IState, any>,
    params: { email?: string; phone?: string; page: number }
  ) =>
    await contacts
      .getAll(params)
      .then((result) => commit(SET_CONTACT, result))
      .catch((error) => console.log(error))
}
