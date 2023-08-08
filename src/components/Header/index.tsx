import { HeaderContainer } from './styles'
import SearchIcon from '../../assets/icons/searchIcon.svg'
import { ChangeEvent, KeyboardEvent, useState, useContext } from 'react'
import { MarvelHeroContext } from '../../context/MarvelHeroContext'
import { useLocation } from 'react-router-dom'

export function Header() {
  const [filter, setFilter] = useState('')
  const { updateCharacterList } = useContext(MarvelHeroContext)
  const { pathname } = useLocation()

  const handleFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value)
  }

  const handleEnterPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      updateCharacterList(0, filter.length > 1 ? filter : undefined)
    }
  }

  const isHomePage = pathname === '/home' || pathname === '/Home'

  return (
    <HeaderContainer>
      {isHomePage && (
        <>
          <img src={SearchIcon} alt="" />
          <input
            placeholder="Busque um agente"
            onChange={handleFilterChange}
            onKeyUp={handleEnterPress}
          />
        </>
      )}
    </HeaderContainer>
  )
}
