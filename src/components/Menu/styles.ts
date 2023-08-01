import styled from 'styled-components'

export const MenuContainer = styled.nav`
  height: 100%;
  width: 256px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
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
