import { HomeContainer, PaginateContainer, ReactPaginateCustom } from './styles'
import ArrowLeftIcon from '../../assets/icons/arrow-left.svg'
import ArrowRightIcon from '../../assets/icons/arrow-right.svg'
import { useEffect, useState, useContext } from 'react'
import { Character } from './components/Character'
import { MarvelHeroContext } from '../../context/MarvelHeroContext'

export function Home() {
  const { characters, updateCharacterList, totalCharacters } =
    useContext(MarvelHeroContext)
  const [itemOffset, setItemOffset] = useState(0)

  useEffect(() => {
    updateCharacterList(itemOffset)
  }, [itemOffset, updateCharacterList])

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * 10) % totalCharacters
    setItemOffset(newOffset)
  }

  return (
    <>
      <HomeContainer>
        {characters.map((character) => {
          return (
            <Character character={character} key={character.id}></Character>
          )
        })}
      </HomeContainer>
      <PaginateContainer>
        <ReactPaginateCustom
          previousLabel={
            <>
              <img src={ArrowLeftIcon} alt=""></img>
              <span>Anterior</span>
            </>
          }
          nextLabel={
            <>
              <span>Próxima</span>
              <img src={ArrowRightIcon} alt=""></img>
            </>
          }
          pageCount={totalCharacters}
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
        />
      </PaginateContainer>
    </>
  )
}
