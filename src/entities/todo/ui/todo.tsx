import { Stack } from '@chakra-ui/react'
import { ReactElement, useEffect } from 'react'

import { useAppSelector } from '@/shared/helpers/hooks'

import { animation } from '../model/data/animation'
import { useTodoActions } from '../model/hooks/use-todo-actions'
import { selectCurrentTodos, selectTodos } from '../model/selector'
import { EmptyTodoList } from './empty-todo-list'
import { TodoInput } from './todo-input'
import { TodoItem } from './todo-item'

export const Todo = (): ReactElement => {
  const todos = useAppSelector(selectTodos)
  const currentTodos = useAppSelector(selectCurrentTodos)

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

  return (
    <>
      <Stack w={'50%'}
        paddingTop={'100px'}
        paddingBottom={'100px'}
        overflowY={'auto'}
      >
        {currentTodos.length === 0 && <EmptyTodoList />}
        {todos.length === 0 &&
          currentTodos.length > 0 &&
          <EmptyTodoList variant='filterEmptyTodos' />}
        {todos.map((todo) => <TodoItem
          key={todo.id}
          {...animation}
          {...todo} />)}
      </Stack>
      <TodoInput />
    </>
  )
}
