import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 22px 36px;

  border-bottom: solid 2px ${(props) => props.theme.divider};

  input {
    border: none;
    box-shadow: none;
    flex: 1;
    color: ${(props) => props.theme['blue-200']};
    font-size: 0.75rem;
    font-weight: 500;
    letter-spacing: -0.36px;
  }

  input:focus-visible {
    outline: none;
  }
`
