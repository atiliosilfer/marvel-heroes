import { Divider, MenuContainer, MenuItem } from './styles'
import Logo from '../../assets/black-logo.svg'
import homeIcon from '../../assets/icons/homeIcon.svg'
import perfilIcon from '../../assets/icons/perfilIcon.svg'
import exitIcon from '../../assets/icons/exitIcon.svg'

import { NavLink } from 'react-router-dom'

export function Menu() {
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
        <NavLink to="perfil">
          <img src={perfilIcon} alt="" />
          <span>Perfil</span>
        </NavLink>
      </MenuItem>

      <Divider />

      <MenuItem>
        <NavLink to="/">
          <img src={exitIcon} alt="" />
          Sair
        </NavLink>
      </MenuItem>
    </MenuContainer>
  )
}
