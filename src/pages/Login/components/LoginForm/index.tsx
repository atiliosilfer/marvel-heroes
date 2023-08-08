import { LoginFormContainer } from './styles'
import loginIcon from '../../../../assets/icons/loginIcon.svg'
import recoverPasswordIcon from '../../../../assets/icons/recoverPasswordIcon.svg'
import emailIcon from '../../../../assets/icons/emailIcon.svg'
import watchPasswordIcon from '../../../../assets/icons/watchPasswordIcon.svg'
import { CustomInput } from '../../../../components/CustomInput'
import { FormEvent } from 'react'

interface LoginFormProps {
  handleRecoverPassword: () => void
  loginSuccess: () => void
}

export function LoginForm({
  handleRecoverPassword,
  loginSuccess,
}: LoginFormProps) {
  function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    loginSuccess()
  }

  return (
    <LoginFormContainer onSubmit={handleLogin}>
      <h1>
        Bem-vindo<span>.</span>
      </h1>
      <h2>informe as suas credenciais de acesso ao portal</h2>

      <CustomInput
        type="email"
        placeholder="Informe seu e-mail"
        required
        name="email"
        icon={emailIcon}
      />

      <CustomInput
        type="password"
        placeholder="Informe sua senha"
        required
        name="password"
        icon={watchPasswordIcon}
      />

      <button type="submit">
        entrar
        <img src={loginIcon} alt="" />
      </button>

      <a onClick={handleRecoverPassword}>
        <img src={recoverPasswordIcon} alt="" />
        Esqueceu a senha?
      </a>
    </LoginFormContainer>
  )
}
