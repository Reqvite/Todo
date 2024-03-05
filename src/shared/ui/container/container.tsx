import { Flex, FlexProps } from '@chakra-ui/react'
import { ReactElement, ReactNode } from 'react'

type Props = FlexProps & {
  children: ReactNode
}

const img =
  'https://wallpapercrafter.com/desktop/3363-space-universe-stars-purple-4k.jpg'

export const Container = (props: Props):ReactElement => {
  const { children, ...otherProps } = props
  return (
    <Flex
      minH="100vh"
      backgroundImage={`url(${img})`}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      p={4}
      {...otherProps}
    >
      {children}
    </Flex>
  )
}
