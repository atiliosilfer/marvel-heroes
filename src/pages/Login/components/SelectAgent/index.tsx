import { CustomSelect, SelectItems } from '../../../../components/CustomSelect'
import { GetCharacters } from '../../../../service/marvelAPI'
import { CharacterType } from '../../../Home'
import { EnterButton, SelectAgentContainer } from './style'
import { useEffect, useState } from 'react'

interface SelectAgentProps {
  submitSelect: () => void
}

export function SelectAgent({ submitSelect }: SelectAgentProps) {
  const [itemOffset, setItemOffset] = useState(0)
  const [selectItems, setSelectItems] = useState<SelectItems[]>([])
  const [selectedAgent, setSelectedAgent] = useState(0)

  useEffect(() => {
    GetCharacters(itemOffset).then((response) => {
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

  function handleSelectItem(id: string) {
    setSelectedAgent(Number(id))
    console.log(selectedAgent)
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
        onSelect={handleSelectItem}
      />

      <EnterButton onClick={submitSelect}>Entrar</EnterButton>
    </SelectAgentContainer>
  )
}
