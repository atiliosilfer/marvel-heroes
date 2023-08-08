import * as Select from '@radix-ui/react-select'
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  PersonIcon,
} from '@radix-ui/react-icons'
import { forwardRef } from 'react'
import {
  LoadMoreButton,
  SelectContent,
  SelectItemContainer,
  SelectTrigger,
} from './style'
import { Thumbnail } from '../../context/MarvelHeroContext'

export type SelectItems = {
  id: number
  name: string
  avatar: Thumbnail
}

interface CustomSelectProps {
  items: SelectItems[]
  loadingMore: () => void
  onSelect: (id: string) => void
}

export function CustomSelect({
  items,
  loadingMore,
  onSelect,
}: CustomSelectProps) {
  return (
    <Select.Root onValueChange={onSelect}>
      <SelectTrigger aria-label="agents">
        <div>
          <Select.Icon>
            <PersonIcon />
          </Select.Icon>
          <Select.Value placeholder="Selecione um agente" />
        </div>

        <Select.Icon>
          <ChevronDownIcon />
        </Select.Icon>
      </SelectTrigger>
      <Select.Portal>
        <SelectContent>
          <Select.ScrollUpButton>
            <ChevronUpIcon />
          </Select.ScrollUpButton>
          <Select.Viewport>
            {items.map((item) => (
              <SelectItem key={item.id} value={String(item.id)}>
                <div>
                  <img
                    src={`${item.avatar?.path}.${item.avatar?.extension}`}
                    alt="agent image"
                  />
                  <Select.ItemText>{item.name}</Select.ItemText>
                </div>
              </SelectItem>
            ))}

            <LoadMoreButton onClick={loadingMore}>Carregar mais</LoadMoreButton>
          </Select.Viewport>
          <Select.ScrollDownButton>
            <ChevronDownIcon />
          </Select.ScrollDownButton>
        </SelectContent>
      </Select.Portal>
    </Select.Root>
  )
}

const SelectItem = forwardRef(
  (
    { children, ...props }: Select.SelectItemProps,
    forwardedRef: React.Ref<HTMLDivElement>,
  ) => {
    return (
      <SelectItemContainer {...props} ref={forwardedRef}>
        {children}
        <Select.ItemIndicator>
          <CheckIcon />
        </Select.ItemIndicator>
      </SelectItemContainer>
    )
  },
)

SelectItem.displayName = 'SelectItem'
