import { ListContainer } from './styles'

interface InfoListProps {
  infoList: string[]
}

export function InfoList({ infoList }: InfoListProps) {
  return (
    <ListContainer>
      {infoList.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ListContainer>
  )
}
