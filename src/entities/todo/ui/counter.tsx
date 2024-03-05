import { Stack, Text, Tooltip } from '@chakra-ui/react'
import { ReactElement } from 'react'

import { useAppSelector } from '@/shared/helpers/hooks'

import { selectTodoCounter } from '../model/selector'

export const Counter = (): ReactElement => {
  const counter = useAppSelector(selectTodoCounter)

  return (
    <Stack alignItems={'center'}>
      <Tooltip label='Completed'>
        <Text>
        ✅ {counter.completed}
        </Text>
      </Tooltip>
      <Tooltip label='Not completed'>
        <Text>
         🚫 {counter.notCompleted}
        </Text>
      </Tooltip>
    </Stack>
  )
}
