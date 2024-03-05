import { DeleteIcon } from '@chakra-ui/icons'
import {
  Button,
  Flex,
  Heading,
  Tooltip,
  useColorModeValue,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { forwardRef, ReactElement, Ref } from 'react'

import { accentColorTransparentDarker } from '@/app/styles/const'
import { TodoI } from '@/shared/types/todo'

import { useTodoActions } from '../model/hooks/use-todo-actions'

type Props = TodoI

export const TodoItemComponent = forwardRef(
  (props: Props, ref: Ref<HTMLDivElement>): ReactElement => {
    const { id, isCompleted, text } = props
    const { onChangeTodoStatus, onDeleteTodo } = useTodoActions()

    const boxBg = useColorModeValue(
      'var(--chakra-colors-secondaryBgColorLight)',
      'var(--chakra-colors-secondaryBgColorDark)',
    )
    const label =
      isCompleted ? 'Mark task as not completed' : 'Mark task as completed'

    const textDecoration = isCompleted ? 'line-through' : 'none'
    const textColor = isCompleted ? accentColorTransparentDarker : 'none'
    return (
      <Flex
        ref={ref}
        alignItems={'center'}
        justifyContent={'space-between'}
        gap={5}
        padding={3}
        h={'auto'}
        bg={boxBg}
        borderRadius='lg'
        overflowY={'hidden'}
        overflow={'auto'}
      >
        <Tooltip label={label}>
          <Heading
            w={'full'}
            color={textColor}
            sx={{
              textDecoration,
              'textDecorationColor': 'var(--chakra-colors-accentColor)',
              'wordWrap': 'break-word',
              'overflowWrap': 'break-word',
            }}
            onClick={() => onChangeTodoStatus(id)}
            cursor='pointer'
            as={'h2'}
            size=''
          >
            {text}
          </Heading>
        </Tooltip>
        <Button variant={'primary'} onClick={() => onDeleteTodo(id)}>
          <DeleteIcon />
        </Button>
      </Flex>
    )
  },
)

export const TodoItem = motion(TodoItemComponent)
