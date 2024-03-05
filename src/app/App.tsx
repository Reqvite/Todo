import { ReactElement } from 'react'

import { Header } from '@/components'
import { Todo } from '@/entities/todo'
import { Container } from '@/shared/ui'

function App(): ReactElement {
  return (
    <>
      <Header/>
      <Container justifyContent='center' alignItems='center'>
        <Todo/>
      </Container>
    </>
  )
}

export default App
