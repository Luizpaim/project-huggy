import { ApiHuggy } from './ApiHuggy'

export interface IContact {
  name: string
  email: string
  phone: string
  mobile: string
  address: string
  district: string
  state: string
}

export class Contacts extends ApiHuggy {
  constructor() {
    super()
  }

  public async getAll(params: {
    email?: string
    phone?: string
    page: number
  }): Promise<IContact[]> {
    const { data } = await this.api.get(
      `/contacts?page=${params.page}&email=${params.email}`,
      await this.configUrl()
    )

    return data
  }
}
