import styled from 'styled-components'

export const ListContainer = styled.ul`
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  margin-left: 37px;
  text-decoration: none;

  color: ${(props) => props.theme['gray-600']};
`
