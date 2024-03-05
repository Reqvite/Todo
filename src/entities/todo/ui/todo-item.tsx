import { DeleteIcon } from '@chakra-ui/icons'
import {
  Button,
  Flex,
  Heading,
  Tooltip,
  useColorModeValue,
} from '@chakra-ui/react'
import { ReactElement } from 'react'

import { accentColorTransparentDarker } from '@/app/styles/const'
import { TodoI } from '@/shared/types/todo'

import { useTodoActions } from '../model/hooks/use-todo-actions'

type Props = TodoI

export const TodoItem = (props: Props): ReactElement => {
  const { id, isCompleted, text } = props
  const { onChangeTodoStatus, onDeleteTodo } = useTodoActions()

  const boxBg = useColorModeValue(
    'var(--chakra-colors-secondaryBgColorLight)',
    'var(--chakra-colors-secondaryBgColorDark)',
  )
  const label =
    isCompleted ? 'Mark task as not completed' : 'Mark task as completed'

  const textDecoration = isCompleted ? 'line-through' : 'none'
  const textColor =
    isCompleted ? accentColorTransparentDarker : 'some'
  return (
    <Flex alignItems={'center'}
      justifyContent={'space-between'}
      gap={2}
      padding={5} h={'80px'}
      bg={boxBg}
      borderRadius='lg'

    >
      <Tooltip label={label}>
        <Heading
          color={textColor}
          sx={{
            textDecoration,
            'textDecorationColor': 'var(--chakra-colors-accentColor)',
          }}
          onClick={() => onChangeTodoStatus(id)}
          cursor='pointer'
          as={'h2'} size=''>{text}</Heading>
      </Tooltip>
      <Button variant={'primary'}
        onClick={() => onDeleteTodo(id)}>
        <DeleteIcon />
      </Button>
    </Flex>
  )
}
