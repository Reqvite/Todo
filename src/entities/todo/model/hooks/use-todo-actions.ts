import { nanoid } from '@reduxjs/toolkit'
import { ChangeEvent } from 'react'

import { useAppDispatch, useAppSelector } from '@/shared/helpers/hooks'

import { MIN_VALUE } from '../const'
import { selectTodoValue } from '../selector'
import { actions } from '../todo.slice'

type ReturnType = {
  addTodo: () => void
  onChangeTodoValue: (event: ChangeEvent<HTMLInputElement>) => void
  onChangeTodoStatus: (id: string) => void
  onDeleteTodo: (id: string) => void
  value: string
}

export const useTodoActions = (): ReturnType => {
  const value = useAppSelector(selectTodoValue)

  const dispatch = useAppDispatch()

  const addTodo =
    (): void => {
      if (value.length < MIN_VALUE) {
        return
      }
      dispatch(actions.addNewTodo(
        {
          'isCompleted': false,
          'text': value,
          'id': nanoid(),
          'createdAt': JSON.stringify(new Date()),
        },
      ))
      dispatch(actions.setTodoValue(''))
    }

  const onChangeTodoValue =
    (event: ChangeEvent<HTMLInputElement>): void => {
      dispatch(actions.setTodoValue(event.target.value))
    }

  const onChangeTodoStatus =
    (id: string): void => {
      dispatch(actions.changeTodoStatus(id))
    }

  const onDeleteTodo = (id:string):void => {
    dispatch(actions.deleteTodoById(id))
  }

  return { addTodo, onChangeTodoValue, onChangeTodoStatus, onDeleteTodo, value }
}
