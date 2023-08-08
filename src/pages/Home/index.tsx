import { HomeContainer, PaginateContainer, ReactPaginateCustom } from './styles'
import ArrowLeftIcon from '../../assets/icons/arrow-left.svg'
import ArrowRightIcon from '../../assets/icons/arrow-right.svg'
import { useEffect, useState } from 'react'
import { GetCharacters } from '../../service/marvelAPI'
import { Character } from './components/Character'

export interface comicInfoItem {
  name: string
}

export type Thumbnail = {
  path: string
  extension: string
}

export type CharacterType = {
  id: number
  name: string
  description: string
  thumbnail: Thumbnail
  comics: {
    items: comicInfoItem[]
  }
  series: {
    items: comicInfoItem[]
  }
  stories: {
    items: comicInfoItem[]
  }
  events: {
    items: comicInfoItem[]
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
            pageCount={totalCharacters}
            onPageChange={handlePageClick}
          />
        </PaginateContainer>
      </HomeContainer>
    </>
  )
}
