import styled from 'styled-components'

export const OverviewContainer = styled.div`
  display: flex;
  flex: 1;
  gap: 28px;

  border-radius: 15px;
  background: var(--white-0, #fff);
  box-shadow: 0px 6px 18px 0px rgba(0, 0, 0, 0.06);

  padding: 42px 34px;

  img {
    width: 90px;
    height: 90px;
    border-radius: 999px;
  }

  h2 {
    color: ${(props) => props.theme['blue-600']};
    font-size: 1.5rem;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.72px;

    margin-bottom: 12px;
  }

  p {
    color: #717171;
    font-size: 1rem;
    font-weight: 600;
    line-height: 153.5%; /* 24.56px */
    letter-spacing: -0.48px;
  }
`
