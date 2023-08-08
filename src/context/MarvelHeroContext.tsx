import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { getCharacters } from '../service/api'

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
  const storedStateAsJSON = localStorage.getItem(
    '@marvel-heroes:context-state-1.0.0',
  )

  const [selectedAgent, setSelectedAgent] = useState(
    storedStateAsJSON ? JSON.parse(storedStateAsJSON).selectedAgent : 0,
  )
  const [userToken, setUserToken] = useState(
    storedStateAsJSON ? JSON.parse(storedStateAsJSON).userToken : '',
  )

  const [characters, setCharacters] = useState<CharacterType[]>([])
  const [totalCharacters, setTotalCharacters] = useState(0)

  useEffect(() => {
    const stateJSON = JSON.stringify({ selectedAgent, userToken })

    localStorage.setItem('@marvel-heroes:context-state-1.0.0', stateJSON)
  }, [selectedAgent, userToken])

  const changeSelectedAgente = (id: number) => {
    setSelectedAgent(id)
  }

  const changeUserToken = (token: string) => {
    setUserToken(token)
  }

  const updateCharacterList = useCallback(
    (itemOffset: number, name?: string) => {
      getCharacters(itemOffset, name).then((response) => {
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
