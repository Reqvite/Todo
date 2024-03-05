import { ReactElement, ReactNode } from 'react'

import { ChakraProvider } from './ChakraProvider/chakra-provider'
import { StoreProvider } from './StoreProvider/ui/store-provider'

type Props = {
  children: ReactNode
}

export const Providers = (props: Props): ReactElement => {
  const { children } = props
  return (
    <StoreProvider>
      <ChakraProvider>
        {children}
      </ChakraProvider>
    </StoreProvider>
  )
}
