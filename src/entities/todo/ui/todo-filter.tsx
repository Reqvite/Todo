import { Select } from '@chakra-ui/react'
import { ReactElement } from 'react'

import { useAppSelector } from '@/shared/helpers/hooks'

import { filterOptions, FilterType } from '../model/data/filter'
import { useTodoActions } from '../model/hooks/use-todo-actions'
import { selectFilter } from '../model/selector'

export const TodoFilter = (): ReactElement => {
  const { onChangeFilter } = useTodoActions()
  const filterValue = useAppSelector(selectFilter)

  return (
    <>
      <Select variant='primary'
        defaultValue={filterValue}
        w={'300px'}
        onChange={(event) => {
          const filter = event.target.value as FilterType
          onChangeFilter(filter)
        }}>
        {filterOptions
          .map((option, idx) => <option key={idx} value={option.value}>
            {option.text}
          </option>)}
      </Select>
    </>
  )
}
