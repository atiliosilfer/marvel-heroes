import styled from 'styled-components'

export const HeroContainer = styled.div`
  display: grid;
  grid-template-columns: 83px 140px;
  gap: 10px;
  height: 150px;

  background-color: ${(props) => props.theme['gray-100']};
  border-radius: 15px;
  box-shadow: 0px 6px 18px 0px rgba(0, 0, 0, 0.06);
  padding: 14px 10px;

  text-overflow: ellipsis;

  h2 {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    color: ${(props) => props.theme.black};
    font-size: 1rem;
    font-weight: 700;
    letter-spacing: -0.48px;
    margin-bottom: 10px;
  }

  p {
    color: ${(props) => props.theme.black};
    font-size: 0.75rem;
    height: 96px;
    white-space: normal;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  img {
    width: 83px;
    height: 119px;

    border-radius: 15px;
  }
`

export const HeroContainerBigger = styled(HeroContainer)`
  width: 526px;
  grid-column: span 2;
`
