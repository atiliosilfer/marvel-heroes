import { styled } from 'styled-components'
import * as Select from '@radix-ui/react-select'

export const SelectTrigger = styled(Select.Trigger)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 14px;

  font-family: Inter;
  font-size: 1rem;

  background-color: ${(props) => props.theme.white};
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme['gray-300']};

  div {
    display: flex;
    gap: 8px;
    align-items: center;
    color: ${(props) => props.theme['gray-500']};
  }
`

export const SelectContent = styled(Select.Content)`
  overflow: hidden;
  background-color: white;
  border-radius: 6px;
  box-shadow:
    0px 10px 38px -10px rgba(22, 23, 24, 0.35),
    0px 10px 20px -15px rgba(22, 23, 24, 0.2);
`

export const SelectItemContainer = styled(Select.Item)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 14px;
  color: ${(props) => props.theme['gray-900']};

  div {
    display: flex;
    align-items: center;
    gap: 8px;

    img {
      border-radius: 999px;
      width: 24px;
      height: 24px;
    }
  }

  &[data-state='checked'] {
    background-color: ${(props) => props.theme['gray-50']};
  }
`

export const LoadMoreButton = styled.button`
  background-color: transparent;
  border: none;
  width: 100%;
  align-content: center;
  padding: 10px 14px;
  color: ${(props) => props.theme['gray-900']};
`
