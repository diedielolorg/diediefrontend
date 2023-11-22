import { atom } from 'recoil'

const ModalAtom = atom({
  key: 'modal',
  default: {
    open: false,
    HelpMessage: '',
    title: '',
    subTitle: '',
    placeholder: '',
    maxLen: 0,
    primaryBtn: {
      children: '',
      onClick: () => {},
    },
    secondaryBtn: {
      children: '',
      onClick: () => {},
    },
  },
})

export default ModalAtom
