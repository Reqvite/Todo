import { createSelector } from '@reduxjs/toolkit'

import { store } from '@/app/Providers/StoreProvider/config/store'
import { TodoI } from '@/shared/types/todo'

export const selectTodoValue =
    (state: ReturnType<typeof store.instance.getState>):
    string => state.todo.todoValue

export const selectFilter =
    (state: ReturnType<typeof store.instance.getState>):
    string => state.todo.filter

export const selectCurrentTodos =
  (state: ReturnType<typeof store.instance.getState>)
  : TodoI[] => state.todo.todos

export const selectFilteredTodos =
  (state: ReturnType<typeof store.instance.getState>)
  : TodoI[] => state.todo.filteredTodos

export const selectTodos =
  (state: ReturnType<typeof store.instance.getState>): TodoI[] => {
    const filter = state.todo.filter
    if (filter !== 'current') {
      return state.todo.filteredTodos
    }
    return state.todo.todos
  }

export const selectTodoCounter = createSelector(
  (state: ReturnType<typeof store.instance.getState>) => state.todo.todos,
  (todos) => ({
    'completed': todos.filter((todo) => todo.isCompleted).length,
    'notCompleted':
            todos.filter((todo) => !todo.isCompleted).length,
  }),
)
