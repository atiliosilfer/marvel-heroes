import { Divider, MenuContainer, MenuItem } from './styles'
import Logo from '../../assets/black-logo.svg'
import homeIcon from '../../assets/icons/homeIcon.svg'
import perfilIcon from '../../assets/icons/perfilIcon.svg'
import exitIcon from '../../assets/icons/exitIcon.svg'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { MarvelHeroContext } from '../../context/MarvelHeroContext'

export function Menu() {
  const { selectedAgent } = useContext(MarvelHeroContext)

  return (
    <MenuContainer>
      <MenuItem>
        <img src={Logo} alt="" />
      </MenuItem>

      <Divider />

      <MenuItem>
        <NavLink to="home">
          <img src={homeIcon} alt="" />
          <span>Home</span>
        </NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink to={`perfil/${selectedAgent}`}>
          <img src={perfilIcon} alt="" />
          <span>Perfil</span>
        </NavLink>
      </MenuItem>

      <Divider />

      <MenuItem>
        <NavLink to="/">
          <img src={exitIcon} alt="" />
          <span>Sair</span>
        </NavLink>
      </MenuItem>
    </MenuContainer>
  )
}
