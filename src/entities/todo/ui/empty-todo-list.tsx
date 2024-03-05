import { Button, Heading, Stack } from '@chakra-ui/react'
import { ReactElement } from 'react'

import { BlurBox } from '@/shared/ui'

import { useTodoActions } from '../model/hooks/use-todo-actions'

export const EmptyTodoList = (): ReactElement => {
  const { addTodo } = useTodoActions()
  return (
    <BlurBox>
      <Stack gap={'10'}>
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
