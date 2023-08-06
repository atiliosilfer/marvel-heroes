import { CharacterType } from '../../../Home'
import { OverviewContainer } from './styles'

interface OverviewProps {
  character: CharacterType
}

export function Overview({ character }: OverviewProps) {
  return (
    <OverviewContainer>
      <div>
        <img
          src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          alt="character image"
        />
      </div>
      <div>
        <h2>{character.name}</h2>
        <p>{character.description}</p>
      </div>
    </OverviewContainer>
  )
}
