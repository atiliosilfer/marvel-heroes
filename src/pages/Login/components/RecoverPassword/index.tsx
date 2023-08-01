import { RecoverPasswordFormContainer } from "./styles";
import emailIcon from '../../../../assets/icons/emailIcon.svg'
import { CustomInput } from "../../../../components/CustomInput";

export function RecoverPassword () {
  return (
  <RecoverPasswordFormContainer>
    <h1>Recuperar senha<span>.</span></h1>
    <h2>Informe o e-mail do seu cadastro. Nós estaremos realizando o envio de um link com as instruções para você redefinir a sua senha.</h2>

    <CustomInput 
      type="email" 
      placeholder="Informe seu e-mail"
      required 
      icon={emailIcon}
    />

    <button disabled>
      enviar link
    </button>
  </RecoverPasswordFormContainer>)
}