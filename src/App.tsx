import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { MarvelHeroProvider } from './context/MarvelHeroContext'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <MarvelHeroProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </MarvelHeroProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
