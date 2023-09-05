import { atom } from 'recoil'

interface test {
  page: number
}

export const pageState = atom<{ page: number }>({
  key: 'page',
  default: {
    page: 1,
  },
})
