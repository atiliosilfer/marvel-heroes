import styled from 'styled-components'

export const LayoutContainer = styled.div`
  display: grid;
  grid-template-columns: 256px auto;
  grid-template-rows: 100vh;
`

export const ContentContainer = styled.div`
  display: grid;
  grid-template-rows: 63px auto;
  grid-template-columns: 100vw - 63px;
`

export const OutletContainer = styled.div`
  padding: 19px 36px;
`
