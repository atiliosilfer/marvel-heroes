import { useNavigate } from 'react-router-dom'
import { CustomSelect, SelectItems } from '../../../../components/CustomSelect'
import {
  CharacterType,
  MarvelHeroContext,
} from '../../../../context/MarvelHeroContext'
import { getCharacters } from '../../../../service/api'
import { EnterButton, SelectCharacterContainer } from './style'
import { useEffect, useState, useContext } from 'react'

export function SelectCharacter() {
  const [itemOffset, setItemOffset] = useState(0)
  const [selectItems, setSelectItems] = useState<SelectItems[]>([])
  const { selectedCharacter, changeSelectedCharacter } =
    useContext(MarvelHeroContext)
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

  function loadMoreCharacters() {
    setItemOffset((state) => state + 10)
  }

  function handleSelectCharacter(id: string) {
    changeSelectedCharacter(Number(id))
  }

  function handleEnter() {
    navigate(`/perfil/${selectedCharacter}`)
  }

  return (
    <SelectCharacterContainer>
      <h1>
        Selecione o seu agente mais legal <span>.</span>
      </h1>

      <p>Tenha a visão completa do seu agente</p>

      <CustomSelect
        items={selectItems}
        loadingMore={loadMoreCharacters}
        onSelect={handleSelectCharacter}
      />

      <EnterButton onClick={handleEnter}>Entrar</EnterButton>
    </SelectCharacterContainer>
  )
}
