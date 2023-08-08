import { api } from '../lib/axios'

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
