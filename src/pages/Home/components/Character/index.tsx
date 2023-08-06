import { CharacterType } from '../..'
import { HeroContainer } from './styles'

interface CharacterProps {
  character: CharacterType
}

export function Character({ character }: CharacterProps) {
  console.log(character.thumbnail)

  return (
    <HeroContainer>
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
