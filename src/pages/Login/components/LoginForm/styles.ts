import styled from "styled-components";

export const LoginFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;

  h1 {
    font-size: 2.25rem;
    color: ${props => props.theme['blue-600']};
    font-weight: 700;
    letter-spacing: -2.34px;

    span {
      color: ${props => props.theme['orange-500']};
    }
  }

  h2 {
    font-size: 1rem;
    font-weight: 400;
    color: ${props => props.theme['gray-500']};
    line-height: 127%;
    letter-spacing: -1.04px;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 9px;

    border-radius: 10px;
    color: ${props => props.theme.white};
    background: ${props => props.theme['blue-600']};
    height: 57px;

    cursor: pointer;

    &:hover {
      opacity: 0.9;
      transition: opacity 0.2s;
    }
  }

  > a {
    display: flex;
    gap: 4px;
    align-items: center;
    text-decoration: none;
    cursor: pointer;

    font-size: 0.688rem;
    font-weight: 400;

    align-self: flex-end;
    color: ${props => props.theme['orange-500']};

    &:hover {
      font-weight: 700;
      transition: font-weight 0.1s;
    }
  }
`