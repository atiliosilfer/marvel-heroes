import { FormsContainer, LoginContainer, LogoContainer } from './styles'
import Logo from '../../assets/white-logo.svg'
import BuildingImage from '../../assets/images/building.png'
import { LoginForm } from './components/LoginForm'
import { useState } from 'react'
import { RecoverPassword } from './components/RecoverPassword'
import { SelectAgent } from './components/SelectAgent'

export function Login() {
  const [isRecoverPassword, setIsRecoverPassword] = useState(false)
  const [logged, setLogged] = useState(false)

  function handleRecoverPassword() {
    setIsRecoverPassword(true)
  }

  function loginSuccess() {
    setLogged(true)
  }

  return (
    <LoginContainer>
      <LogoContainer>
        <img src={Logo} alt="" />
      </LogoContainer>

      <div>
        <img src={BuildingImage} alt="" />
      </div>

      {logged ? (
        <SelectAgent />
      ) : (
        <FormsContainer>
          {isRecoverPassword ? (
            <RecoverPassword />
          ) : (
            <LoginForm
              handleRecoverPassword={handleRecoverPassword}
              loginSuccess={loginSuccess}
            />
          )}
        </FormsContainer>
      )}
    </LoginContainer>
  )
}
