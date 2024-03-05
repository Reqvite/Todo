import { Button, Heading, Stack } from '@chakra-ui/react'
import { ReactElement } from 'react'

import { BlurBox } from '@/shared/ui'

import { useTodoActions } from '../model/hooks/use-todo-actions'

type Props = {
  variant?: 'filterEmptyTodos' | 'currentTodos'
}

export const EmptyTodoList = (props: Props): ReactElement => {
  const { variant } = props
  const { addTodo } = useTodoActions()

  if (variant === 'filterEmptyTodos') {
    return <BlurBox>
      <Heading as='h1' size='lg'>
       No todo found by this filter.
      </Heading>
    </BlurBox>
  }

  return (
    <BlurBox>
      <Stack gap={'10'} >
        <Heading as='h1' size='lg'>
       Simple todo app for efficient task management.
        </Heading>

        <Button variant={'primary'} onClick={addTodo}>
          Add your first todo
        </Button>
      </Stack>
    </BlurBox>
  )
}
