import { Divider, MenuContainer, MenuItem } from './styles'
import Logo from '../../assets/black-logo.svg'
import { NavLink } from 'react-router-dom'

export function Menu() {
  return (
    <MenuContainer>
      <MenuItem>
        <img src={Logo} alt="" />
      </MenuItem>
      
      <Divider/>

      <MenuItem>
        <NavLink to="home">
          home
        </NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink to="perfil">
          perfil
        </NavLink>
      </MenuItem>

      <Divider/>

      <MenuItem>
        <NavLink to="/">
          sair
        </NavLink>
      </MenuItem>

    </MenuContainer>
  )
}
