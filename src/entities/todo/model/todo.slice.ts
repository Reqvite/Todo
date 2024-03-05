import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { TodoI } from '@/shared/types/todo'

import { FilterType } from './data/filter'

type State = {
  'todos': TodoI[]
  'filteredTodos': TodoI[]
  'todoValue': string
  'counter': { completed: number, notCompleted: number }
  filter: FilterType
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
    'filterTodos': (state, action: PayloadAction<FilterType>) => {
      state.filter = action.payload
      switch (action.payload) {
        case 'completed': {
          state.filteredTodos = state.todos.filter((todo) => todo.isCompleted)
          state.filter = 'completed'
          break
        }
        case 'not_completed': {
          state.filteredTodos = state.todos.filter((todo) => !todo.isCompleted)
          state.filter = 'not_completed'
          break
        }
        default: {
          state.filter = 'current'
          break
        }
      }
    },
  },
})

export { actions, name, reducer }
