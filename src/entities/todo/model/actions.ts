import { PayloadAction } from '@reduxjs/toolkit'

import { TodoI } from '@/shared/types/todo'

import { FilterType } from './data/filter'
import { State } from './todo.slice'

const updateTodo = (todo: TodoI, id:string):TodoI => {
  if (todo.id === id) {
    return {
      ...todo,
      'isCompleted': !todo.isCompleted,
    }
  }
  return todo
}

const sortTodos = (first:TodoI, next:TodoI):number => {
  if (first.isCompleted !== next.isCompleted) {
    return first.isCompleted ? 1 : -1
  }
  return next.createdAt.localeCompare(first.createdAt)
}

const filterList = (list:TodoI[], filter:FilterType):TodoI[] => {
  switch (filter) {
    case 'completed': {
      return list.filter((todo) => todo.isCompleted)
    }
    case 'not_completed': {
      return list.filter((todo) => !todo.isCompleted)
    }
    default: {
      return list
    }
  }
}

const changeTodoStatus =
    (state: State, action: PayloadAction<string>): void => {
      const id = action.payload

      const updatedCurrentTodos =
            state.todos.map((todo) => updateTodo(todo, id)).sort(sortTodos)

      const updatedFilteredTodos =
          state.filteredTodos
            .map((todo) => updateTodo(todo, id)).sort(sortTodos)

      state.todos = updatedCurrentTodos
      state.filteredTodos = filterList(updatedFilteredTodos, state.filter)
    }

const filterTodos = (state: State, action: PayloadAction<FilterType>):void => {
  state.filter = action.payload
  state.filteredTodos = filterList(state.todos, action.payload)
}
export { changeTodoStatus, filterTodos }
