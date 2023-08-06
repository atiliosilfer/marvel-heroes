import { comicInfoItem } from '../../../Home'
import { ListContainer } from './styles'

interface InfoListProps {
  infoList: comicInfoItem[]
}

export function InfoList({ infoList }: InfoListProps) {
  return (
    <ListContainer>
      {infoList.map((item) => (
        <li key={item.name}>{item.name}</li>
      ))}
    </ListContainer>
  )
}
