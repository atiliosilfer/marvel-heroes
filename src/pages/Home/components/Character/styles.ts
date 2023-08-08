import styled from 'styled-components'

export const HeroContainer = styled.button`
  display: grid;
  grid-template-columns: 83px auto;
  gap: 10px;
  height: 150px;
  border: none;

  background-color: ${(props) => props.theme['gray-100']};
  border-radius: 15px;
  padding: 14px 10px;

  text-overflow: ellipsis;
  text-align: start;
  overflow: hidden;

  h2 {
    color: ${(props) => props.theme.black};
    font-size: 1rem;
    font-weight: 700;
    letter-spacing: -0.48px;
    margin-bottom: 10px;

    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    max-width: fit-content;
  }

  p {
    color: ${(props) => props.theme.black};
    font-size: 0.75rem;

    text-overflow: ellipsis;
    overflow: hidden;
    max-height: 96px;
  }

  img {
    width: 83px;
    height: 119px;

    border-radius: 15px;
  }

  &:hover {
    box-shadow: 0px 6px 18px 0px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transition: box-shadow 0.2s;
  }
`
