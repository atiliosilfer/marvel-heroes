import { api } from '../lib/axios'
import cookie from 'react-cookies'
import * as jose from 'jose'

export interface LoginFormData {
  email: string
  password: string
}

const secret = new TextEncoder().encode('secret_mock')

const alg = 'HS256'

export async function login(dataForm: LoginFormData) {
  const jwt = await new jose.SignJWT({ dataForm })
    .setProtectedHeader({ alg })
    .setExpirationTime('0.1h')
    .sign(secret)

  cookie.save('token', jwt, { path: '/' })
  return jwt
}

export async function logout() {
  cookie.remove('token', { path: '/' })
  return true
}

export async function getCharacters(offset: number = 0, name?: string) {
  return await api.get('characters', {
    params: {
      limit: 10,
      offset,
      name,
    },
  })
}

export async function getCharacter(id: number) {
  return await api.get('characters', {
    params: {
      id,
    },
  })
}
