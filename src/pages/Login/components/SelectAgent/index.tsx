import { useNavigate } from 'react-router-dom'
import { CustomSelect, SelectItems } from '../../../../components/CustomSelect'
import {
  CharacterType,
  MarvelHeroContext,
} from '../../../../context/MarvelHeroContext'
import { getCharacters } from '../../../../service/api'
import { EnterButton, SelectAgentContainer } from './style'
import { useEffect, useState, useContext } from 'react'

export function SelectAgent() {
  const [itemOffset, setItemOffset] = useState(0)
  const [selectItems, setSelectItems] = useState<SelectItems[]>([])
  const { selectedAgent, changeSelectedAgente } = useContext(MarvelHeroContext)
  const navigate = useNavigate()

  useEffect(() => {
    getCharacters(itemOffset).then((response) => {
      const responseToSelectItem: SelectItems[] =
        response.data.data.results.map((item: CharacterType) => {
          return {
            name: item.name,
            id: item.id,
            avatar: item.thumbnail,
          }
        })

      setSelectItems((state) => [
        ...state,
        ...responseToSelectItem.filter(
          (finteredItem) =>
            state.findIndex(
              (selectItem) => selectItem.id === finteredItem.id,
            ) === -1,
        ),
      ])
    })
  }, [itemOffset])

  function loadMoreAgents() {
    setItemOffset((state) => state + 10)
  }

  function handleSelectAgent(id: string) {
    changeSelectedAgente(Number(id))
  }

  function handleEnter() {
    navigate(`/perfil/${selectedAgent}`)
  }

  return (
    <SelectAgentContainer>
      <h1>
        Selecione o seu agente mais legal <span>.</span>
      </h1>

      <p>Tenha a visão completa do seu agente</p>

      <CustomSelect
        items={selectItems}
        loadingMore={loadMoreAgents}
        onSelect={handleSelectAgent}
      />

      <EnterButton onClick={handleEnter}>Entrar</EnterButton>
    </SelectAgentContainer>
  )
}
