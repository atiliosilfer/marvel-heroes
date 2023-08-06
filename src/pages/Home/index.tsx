import {
  HeroContainer,
  HeroContainerBigger,
  HomeContainer,
  PaginateContainer,
  ReactPaginateCustom,
} from './styles'
import ArrowLeftIcon from '../../assets/icons/arrow-left.svg'
import ArrowRightIcon from '../../assets/icons/arrow-right.svg'

export function Home() {
  // const handlePageClick = (event) => {
  //   const newOffset = (event.selected * itemsPerPage) % items.length
  //   console.log(
  //     `User requested page number ${event.selected}, which is offset ${newOffset}`,
  //   )
  //   setItemOffset(newOffset)
  // }

  return (
    <>
      <HomeContainer>
        <HeroContainer></HeroContainer>
        <HeroContainer></HeroContainer>
        <HeroContainer></HeroContainer>
        <HeroContainer></HeroContainer>
        <HeroContainer></HeroContainer>
        <HeroContainer></HeroContainer>
        <HeroContainer></HeroContainer>
        <HeroContainer></HeroContainer>
        <HeroContainerBigger></HeroContainerBigger>
        <HeroContainerBigger></HeroContainerBigger>

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
            onPageChange={(e) => console.log(e.selected)}
          />
        </PaginateContainer>
      </HomeContainer>
    </>
  )
}
