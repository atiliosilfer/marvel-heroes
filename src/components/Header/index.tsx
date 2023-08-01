import { HeaderContainer } from './styles'
import SearchIcon from '../../assets/icons/searchIcon.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={SearchIcon} alt="" />
      <input placeholder="Busque um agente" />
    </HeaderContainer>
  )
}
