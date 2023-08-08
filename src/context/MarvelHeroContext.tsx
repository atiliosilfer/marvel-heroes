import { ReactNode, createContext, useState } from 'react'

interface MarvelHeroProviderProps {
  children: ReactNode
}

interface MarvelHeroContextType {
  selectedAgent: number
  userToken: string
  changeSelectedAgente: (id: number) => void
  changeUserToken: (token: string) => void
}

export const MarvelHeroContext = createContext({} as MarvelHeroContextType)

export function MarvelHeroProvider({ children }: MarvelHeroProviderProps) {
  const [selectedAgent, setSelectedAgent] = useState(0)
  const [userToken, setUserToken] = useState('')

  const changeSelectedAgente = (id: number) => {
    setSelectedAgent(id)
  }

  const changeUserToken = (token: string) => {
    setUserToken(token)
  }

  return (
    <MarvelHeroContext.Provider
      value={{
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
