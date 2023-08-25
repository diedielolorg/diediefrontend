import { atom } from 'recoil'

const SnackBarAtom = atom({
  key: 'snackBar',
  default: {
    open: false,
  },
})

export default SnackBarAtom
