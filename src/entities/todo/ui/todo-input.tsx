import { ReactElement } from 'react'

import { BlurBox, Input } from '@/shared/ui'

import { useTodoActions } from '../model/hooks/use-todo-actions'

export const TodoInput = (): ReactElement => {
  const { onChangeTodoValue, value } = useTodoActions()

  return (
    <BlurBox position={'fixed'} w='100%' bottom={0} left={0} padding={5}>
      <Input autoFocus isRequired label='Write your todo'
        value={value}
        onChange={onChangeTodoValue} />
    </BlurBox>
  )
}
