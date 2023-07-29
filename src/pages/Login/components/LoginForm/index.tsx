import { LoginFormContainer } from "./styles";
import loginIcon from '../../../../assets/icons/loginIcon.svg'
import recoverPasswordIcon from '../../../../assets/icons/recoverPasswordIcon.svg'

interface LoginFormProps {
  handleRecoverPassword: () => void;
}

export function LoginForm({ handleRecoverPassword }: LoginFormProps) {
  return (
    <LoginFormContainer>
      <h1>Bem-vindo<span>.</span></h1>
      <h2>informe as suas credenciais de acesso ao portal</h2>

      <input type="email" />
      <input type="password" />

      <button>
        entrar
        <img src={loginIcon} alt=""/>
      </button>

      <a onClick={handleRecoverPassword}>
        <img src={recoverPasswordIcon} alt=""/> 
        Esqueceu a senha?
      </a>
    </LoginFormContainer>
  )
}