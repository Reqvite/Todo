import { Stack } from '@chakra-ui/react'
import { ReactElement, useEffect } from 'react'

import { useAppSelector } from '@/shared/helpers/hooks'

import { useTodoActions } from '../model/hooks/use-todo-actions'
import { selectTodos } from '../model/selector'
import { EmptyTodoList } from './empty-todo-list'
import { TodoInput } from './todo-input'
import { TodoItem } from './todo-item'

export const Todo = (): ReactElement => {
  const todos = useAppSelector(selectTodos)
  const { addTodo } = useTodoActions()

  useEffect(() => {
    const handleEnterKeyPress = (event: KeyboardEvent): void => {
      if (event.code === 'Enter') {
        addTodo()
      }
    }
    document.body.addEventListener('keydown', handleEnterKeyPress)

    return () => {
      document.body.removeEventListener('keydown', handleEnterKeyPress)
    }
  }, [addTodo])

  return <Stack w={'50%'} paddingTop={'100px'} paddingBottom={'100px'}>
    {todos.length === 0 && <EmptyTodoList/>}
    {todos.map((todo) => <TodoItem key={todo.id} {...todo} />)}
    <TodoInput/>
  </Stack>
}
