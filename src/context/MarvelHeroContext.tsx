import { ReactNode, createContext, useCallback, useState } from 'react'
import { GetCharacters } from '../service/marvelAPI'

interface MarvelHeroProviderProps {
  children: ReactNode
}

export interface comicInfoItem {
  name: string
}

export type Thumbnail = {
  path: string
  extension: string
}

export type CharacterType = {
  id: number
  name: string
  description: string
  thumbnail: Thumbnail
  comics: {
    items: comicInfoItem[]
  }
  series: {
    items: comicInfoItem[]
  }
  stories: {
    items: comicInfoItem[]
  }
  events: {
    items: comicInfoItem[]
  }
}

interface MarvelHeroContextType {
  characters: CharacterType[]
  updateCharacterList: (itemOffset: number, name?: string) => void
  totalCharacters: number
  selectedAgent: number
  userToken: string
  changeSelectedAgente: (id: number) => void
  changeUserToken: (token: string) => void
}

export const MarvelHeroContext = createContext({} as MarvelHeroContextType)

export function MarvelHeroProvider({ children }: MarvelHeroProviderProps) {
  const [selectedAgent, setSelectedAgent] = useState(0)
  const [userToken, setUserToken] = useState('')
  const [characters, setCharacters] = useState<CharacterType[]>([])
  const [totalCharacters, setTotalCharacters] = useState(0)

  const changeSelectedAgente = (id: number) => {
    setSelectedAgent(id)
  }

  const changeUserToken = (token: string) => {
    setUserToken(token)
  }

  const updateCharacterList = useCallback(
    (itemOffset: number, name?: string) => {
      GetCharacters(itemOffset, name).then((response) => {
        setCharacters(response.data.data.results as CharacterType[])
        setTotalCharacters(response.data.data.total)
      })
    },
    [],
  )

  return (
    <MarvelHeroContext.Provider
      value={{
        characters,
        updateCharacterList,
        totalCharacters,
        selectedAgent,
        userToken,
        changeSelectedAgente,
        changeUserToken,
      }}
    >
      {children}
    </MarvelHeroContext.Provider>
  )
}
