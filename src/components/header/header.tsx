import { Flex, Heading, Stack, Text } from '@chakra-ui/react'
import { ReactElement } from 'react'

import { Counter } from '@/entities/todo'
import { getTodaysDay } from '@/shared/helpers/lib'
import { BlurBox } from '@/shared/ui'

export const Header = (): ReactElement => {
  return (
    <BlurBox position='fixed' w='100%' padding={3}
    >
      <Flex gap={5} justifyContent={'space-between'}>
        <Stack>
          <Heading size='md'>
           My day
          </Heading>
          <Text>
            {getTodaysDay()}
          </Text>
        </Stack>
        <Counter/>
      </Flex>
    </BlurBox>
  )
}
