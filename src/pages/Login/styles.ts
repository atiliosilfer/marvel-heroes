import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  width: 100%;
  height: 100vh;
  
  padding: 49px 106px;

  background-color: ${(props) => props.theme["blue-800"]};
`

export const LogoContainer = styled.div`
  flex-basis: 100%;
`

export const FormsContainer = styled.div`
  height: 433px;
  width: 380px;
  
  padding: 36px;
  border-radius: 28px;
  background-color: ${(props) => props.theme.white};
`