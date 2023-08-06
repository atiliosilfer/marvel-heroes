import axios from 'axios'

const API_BASE_URL = 'https://gateway.marvel.com/v1/public/'
const API_PUBLIC_KEY = '8cb816274698ce367bc8274c74faa647'

export const api = axios.create({
  baseURL: API_BASE_URL,
  params: {
    apikey: API_PUBLIC_KEY,
  },
})
