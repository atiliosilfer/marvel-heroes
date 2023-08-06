import * as Tabs from '@radix-ui/react-tabs'
import styled from 'styled-components'

export const TabsTrigger = styled(Tabs.Trigger)`
  background-color: transparent;
  border: none;
  margin-right: 10px;
  color: ${(props) => props.theme['gray-500']};
  padding: 16px 4px;

  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  cursor: pointer;

  &[data-state='active'] {
    color: ${(props) => props.theme['blue-600']};
    border-bottom: solid 2px ${(props) => props.theme['blue-600']};
  }

  &:focus {
    box-shadow: none;
  }
`

export const TabsList = styled(Tabs.List)`
  margin-bottom: 27px;
`
