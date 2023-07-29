import styled from "styled-components";

export const CustomInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 15px;
  border-radius: 10px;
  border: 0.7px solid ${props => props.theme['gray-400']};

  input {
    border: none;
    box-shadow: none;
  }
`