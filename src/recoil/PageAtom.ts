import { atom } from 'recoil'

export const pageState = atom<{ page: number }>({
  key: 'page',
  default: {
    page: 1,
  },
})
