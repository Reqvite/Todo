import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { TodoI } from '@/shared/types/todo'

import { changeTodoStatus, filterTodos } from './actions'
import { FilterType } from './data/filter'

type State = {
  'todos': TodoI[]
  'filteredTodos': TodoI[]
  'todoValue': string
  'counter': { completed: number, notCompleted: number }
  'filter': FilterType
}

const initialState: State = {
  'todos': [],
  'filteredTodos': [],
  'todoValue': '',
  'counter': { 'completed': 0, 'notCompleted': 0 },
  'filter': 'current',
}

const { reducer, actions, name } = createSlice({
  initialState,
  'name': 'todo',
  'reducers': {
    'addNewTodo': (state, action: PayloadAction<TodoI>) => {
      state.todos = [action.payload, ...state.todos]
      if (state.filter === 'not_completed') {
        state.filteredTodos = [action.payload, ...state.filteredTodos]
      }
    },
    'setTodoValue': (state, action: PayloadAction<string>) => {
      state.todoValue = action.payload
    },
    changeTodoStatus,
    filterTodos,
    'deleteTodoById': (state, action: PayloadAction<string>) => {
      const id = action.payload
      state.todos = state.todos.filter((todo) => todo.id !== id)
      state.filteredTodos = state.filteredTodos.filter((todo) => todo.id !== id)
    },
  },
})

export { actions, name, reducer, type State }
