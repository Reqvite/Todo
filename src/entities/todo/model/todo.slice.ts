import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { TodoI } from '@/shared/types/todo'

type State = {
  'todos': TodoI[]
  'todoValue': string
  'counter': {completed: number, notCompleted: number}
}

const initialState: State = {
  'todos': [],
  'todoValue': '',
  'counter': { 'completed': 0, 'notCompleted': 0 },
}

const { reducer, actions, name } = createSlice({
  initialState,
  'name': 'todo',
  'reducers': {
    'addNewTodo': (state, action: PayloadAction<TodoI>) => {
      state.todos = [action.payload, ...state.todos]
    },
    'setTodoValue': (state, action: PayloadAction<string>) => {
      state.todoValue = action.payload
    },
    'changeTodoStatus':
  (state, action: PayloadAction<string>) => {
    const id = action.payload

    const updatedTodos = state.todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          'isCompleted': !todo.isCompleted,
        }
      }
      return todo
    })

    updatedTodos.sort((first, next) => {
      if (first.isCompleted !== next.isCompleted) {
        return first.isCompleted ? 1 : -1
      }
      return next.createdAt.localeCompare(first.createdAt)
    })

    state.todos = updatedTodos
  },
    'deleteTodoById': (state, action: PayloadAction<string>) => {
      const id = action.payload
      state.todos = state.todos.filter((todo) => todo.id !== id)
    },
  },
})

export { actions, name, reducer }
