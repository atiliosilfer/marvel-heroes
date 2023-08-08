import styled from 'styled-components'

export const SelectCharacterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  height: fit-content;

  padding: 36px;
  border-radius: 28px;
  background-color: ${(props) => props.theme.white};

  h1 {
    font-size: 2.25rem;
    color: ${(props) => props.theme['blue-600']};
    font-weight: 700;
    letter-spacing: -2.34px;

    span {
      color: ${(props) => props.theme['orange-500']};
    }

    margin-bottom: 32px;
  }

  p {
    font-size: 1rem;
    font-weight: 400;
    color: ${(props) => props.theme['gray-500']};
    line-height: 127%;
    letter-spacing: -1.04px;
    margin-bottom: 12px;
  }
`

export const EnterButton = styled.button`
  align-self: flex-end;
  border-radius: 8px;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme['blue-800']};
  padding: 12px 20px;
  border: none;
  box-shadow: none;
  margin-top: 12px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
    transition: opacity 0.2s;
  }
`
