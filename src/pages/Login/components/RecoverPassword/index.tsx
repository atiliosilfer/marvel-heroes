import { RecoverPasswordFormContainer } from './styles'
import emailIcon from '../../../../assets/icons/emailIcon.svg'
import { CustomInput } from '../../../../components/CustomInput'
import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export function RecoverPassword() {
  const [linkSent, setLinkSent] = useState(false)
  const navigate = useNavigate()

  function handleSendLink(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setLinkSent(true)
  }

  function handleBackLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    navigate(0)
  }

  return (
    <>
      {!linkSent ? (
        <RecoverPasswordFormContainer onSubmit={handleSendLink}>
          <h1>
            Recuperar senha<span>.</span>
          </h1>
          <h2>
            Informe o e-mail do seu cadastro. Nós estaremos realizando o envio
            de um link com as instruções para você redefinir a sua senha.
          </h2>

          <CustomInput
            type="email"
            placeholder="Informe seu e-mail"
            required
            icon={emailIcon}
          />

          <button type="submit">enviar link</button>
        </RecoverPasswordFormContainer>
      ) : (
        <RecoverPasswordFormContainer onSubmit={handleBackLogin}>
          <h1>
            Tudo certo<span>{';)'}</span>
          </h1>
          <h2>
            Foi enviado um e-mail para você com instruções de como redefinir a
            sua senha.
          </h2>

          <button type="submit">voltar para o login</button>
        </RecoverPasswordFormContainer>
      )}
    </>
  )
}
