import { GetLocalToken } from '@/modules-local-storage'
import type { Axios, AxiosRequestConfig } from 'axios'
import axios from 'axios'

export class ApiHuggy {
  api: Axios
  config!: AxiosRequestConfig

  private url: string = import.meta.env.VITE_API_HUGGY

  constructor() {
       
    this.api = axios.create({
      baseURL: this.url
    })
  }

  public async configUrl(): Promise<AxiosRequestConfig> {
       
    this.config = {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Accept-Language': 'pt-br',
        Authorization: 'Bearer ' + GetLocalToken().access_token
      }
    }
       
    return this.config
  }
}
