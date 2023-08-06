import { HomeContainer, PaginateContainer, ReactPaginateCustom } from './styles'
import ArrowLeftIcon from '../../assets/icons/arrow-left.svg'
import ArrowRightIcon from '../../assets/icons/arrow-right.svg'
import { useEffect, useState } from 'react'
import { GetCharacters } from '../../service/marvelAPI'
import { Character } from './components/Character'

export type CharacterType = {
  id: number
  name: string
  description: string
  thumbnail: {
    path: string
    extension: string
  }
}

export function Home() {
  const [characters, setCharacters] = useState<CharacterType[]>([])
  const [totalCharacters, setTotalCharacters] = useState(0)
  const [itemOffset, setItemOffset] = useState(0)

  useEffect(() => {
    GetCharacters(itemOffset).then((response) => {
      setCharacters(response.data.data.results as CharacterType[])
      setTotalCharacters(response.data.data.total)
    })
  }, [itemOffset])

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * 10) % totalCharacters
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`,
    )

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
            pageCount={10}
            onPageChange={handlePageClick}
          />
        </PaginateContainer>
      </HomeContainer>
    </>
  )
}
