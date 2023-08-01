import styled from 'styled-components'

export const RecoverPasswordFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;

  h1 {
    font-size: 2.25rem;
    color: ${(props) => props.theme['blue-600']};
    font-weight: 700;
    letter-spacing: -2.34px;

    span {
      color: ${(props) => props.theme['orange-500']};
    }
  }

  h2 {
    font-size: 1rem;
    font-weight: 400;
    color: ${(props) => props.theme['gray-500']};
    line-height: 127%;
    letter-spacing: -1.04px;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 9px;

    border-radius: 10px;
    color: ${(props) => props.theme.white};
    background: ${(props) => props.theme['blue-600']};
    height: 57px;

    cursor: pointer;

    &:hover:not(:disabled) {
      opacity: 0.9;
      transition: opacity 0.2s;
    }

    &:disabled {
      background: ${(props) => props.theme.background};
      box-shadow: none;
      border: none;
      cursor: not-allowed;
    }
  }
`
