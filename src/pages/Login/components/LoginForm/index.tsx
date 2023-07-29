import { LoginFormContainer } from "./styles";
import loginIcon from '../../../../assets/icons/loginIcon.svg'
import recoverPasswordIcon from '../../../../assets/icons/recoverPasswordIcon.svg'
import emailIcon from '../../../../assets/icons/emailIcon.svg'
import watchPasswordIcon from '../../../../assets/icons/watchPasswordIcon.svg'
import { CustomInput } from "../../../../components/CustomInput";

interface LoginFormProps {
  handleRecoverPassword: () => void;
}

export function LoginForm({ handleRecoverPassword }: LoginFormProps) {
  return (
    <LoginFormContainer>
      <h1>Bem-vindo<span>.</span></h1>
      <h2>informe as suas credenciais de acesso ao portal</h2>

      <CustomInput 
        type="email" 
        placeholder="Informe sua e-mail"
        required 
        icon={emailIcon}
      />

      <CustomInput 
        type="password"  
        placeholder="Informe sua senha"
        required 
        icon={watchPasswordIcon}
      />

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