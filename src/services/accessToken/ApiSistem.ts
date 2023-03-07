/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Axios, AxiosRequestConfig } from 'axios'
import axios from 'axios'

export class ApiSistem {
  api: Axios
  config!: AxiosRequestConfig

  private url: string = import.meta.env.VITE_API_SISTEM

  constructor() {
    this.api = axios.create({
      baseURL: this.url
    })
  }
}
