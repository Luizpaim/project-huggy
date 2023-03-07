import type { IContact } from "@/services/huggy/Contacts"


export interface IState {
  contacts: IContact[] | null
}
export const state: IState = {
  contacts: null
}
