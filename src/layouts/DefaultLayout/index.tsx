import { Outlet } from 'react-router-dom'
import { ContentContainer, LayoutContainer, OutletContainer } from './styles'
import { Header } from '../../components/Header'
import { Menu } from '../../components/Menu'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Menu />
      <ContentContainer>
        <Header />
        <OutletContainer>
          <Outlet />
        </OutletContainer>
      </ContentContainer>
    </LayoutContainer>
  )
}
