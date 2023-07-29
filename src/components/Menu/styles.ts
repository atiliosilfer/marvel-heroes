import styled from "styled-components";

export const MenuContainer = styled.nav`
  height: 100%;
  width: 256px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`

export const Divider = styled.hr`
  margin: 24px 0px;
  border-color: ${(props) => props.theme.divider};
  height: 1px;
`

export const MenuItem = styled.div`
  padding: 24px 20px;
`