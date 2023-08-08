import { useNavigate } from 'react-router-dom'
import { HeroContainer } from './styles'
import { CharacterType } from '../../../../context/MarvelHeroContext'

interface CharacterProps {
  character: CharacterType
}

export function Character({ character }: CharacterProps) {
  const navigate = useNavigate()

  function handleClickCharacter() {
    navigate(`/perfil/${character.id}`)
  }

  return (
    <HeroContainer onClick={handleClickCharacter}>
      <div>
        <img
          src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          alt=""
        />
      </div>

      <div>
        <h2>{character.name}</h2>
        <p>{character.description}</p>
      </div>
    </HeroContainer>
  )
}
