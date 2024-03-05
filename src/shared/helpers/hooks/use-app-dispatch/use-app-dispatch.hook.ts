import { useDispatch } from 'react-redux'

import { store } from '@/app/Providers/StoreProvider/config/store'

const useAppDispatch: () => typeof store.instance.dispatch = () => {
  return useDispatch<typeof store.instance.dispatch>()
}

export { useAppDispatch }
