import { FormsContainer, LoginContainer, LogoContainer } from './styles'
import Logo from '../../assets/white-logo.svg'
import BuildingImage from '../../assets/images/building.png'
import { LoginForm } from './components/LoginForm'
import { useState } from 'react'
import { RecoverPassword } from './components/RecoverPassword'
import { useNavigate } from 'react-router-dom'
import { SelectAgent } from './components/SelectAgent'

export function Login() {
  const [isRecoverPassword, setIsRecoverPassword] = useState(false)
  const [logged, setLogged] = useState(false)

  const navigate = useNavigate()

  function handleRecoverPassword() {
    setIsRecoverPassword(true)
  }

  function loginSuccess() {
    setLogged(true)
  }

  function handleEnter() {
    navigate('/Home')
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
        <SelectAgent submitSelect={handleEnter} />
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
