import { InputHTMLAttributes } from 'react'
import { CustomInputContainer } from './styles'

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon: string
}

export function CustomInput({ icon, ...props }: CustomInputProps) {
  return (
    <CustomInputContainer>
      <input {...props} />
      <img src={icon} alt="" />
    </CustomInputContainer>
  )
}
