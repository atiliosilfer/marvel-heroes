import styled from 'styled-components'

export const MenuContainer = styled.nav`
  height: 100%;
  width: 256px;
  transition: width 0.3s linear;

  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  @media (max-width: 745px) {
    width: 57px;

    transition: width 0.3s linear;

    span {
      display: none;
    }

    div:first-child {
      display: none;
    }
  }
`

export const ImageContainer = styled.img`
  @media (max-width: 745px) {
    display: none !important;
  }
`

export const Divider = styled.hr`
  border: solid 1px ${(props) => props.theme.divider};
`

export const MenuItem = styled.div`
  padding: 15px 20px;

  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 14px;

    font-size: 0.813rem;
    color: ${(props) => props.theme.black};
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.39px;
  }
`
