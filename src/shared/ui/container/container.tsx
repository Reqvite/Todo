import { Flex, FlexProps } from '@chakra-ui/react'
import { ReactElement, ReactNode } from 'react'

type Props = FlexProps & {
  children: ReactNode
}

export const Container = (props: Props):ReactElement => {
  const { children, ...otherProps } = props
  return (
    <Flex
      minH="100vh"
      p={4}
      {...otherProps}
    >
      {children}
    </Flex>
  )
}
