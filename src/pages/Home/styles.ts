import styled from 'styled-components'
import ReactPaginate from 'react-paginate'

export const HomeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 258px);
  grid-template-rows: repeat(4, 1fr);
  gap: 10px;
`

export const HeroContainer = styled.div`
  width: 258px;
  height: 150px;
  background-color: ${(props) => props.theme['gray-100']};
  border-radius: 15px;
  box-shadow: 0px 6px 18px 0px rgba(0, 0, 0, 0.06);
`

export const HeroContainerBigger = styled(HeroContainer)`
  width: 526px;
  grid-column: span 2;
`

export const PaginateContainer = styled.div`
  display: flex;
  justify-content: center;
  grid-column: span 4;
`
export const ReactPaginateCustom = styled(ReactPaginate)`
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style-type: none;
  justify-content: space-between;

  li a {
    padding: 0.1rem 1rem;
    border: #d0d5dd 1px solid;
    cursor: pointer;
    display: flex;
    align-items: center;
    height: 40px;
  }

  li:first-child {
    a {
      border-top-left-radius: 7px;
      border-bottom-left-radius: 7px;
    }
  }

  li:last-child {
    a {
      border-top-right-radius: 7px;
      border-bottom-right-radius: 7px;
    }
  }

  li.selected {
    a {
      color: ${(props) => props.theme['blue-600']};
      background-color: #f9fafb;
    }
  }

  li.next,
  li.previous {
    a {
      display: flex;
      align-items: center;
      color: ${(props) => props.theme['blue-600']};
    }
  }

  li:focus,
  a:focus {
    box-shadow: none;
  }
`
