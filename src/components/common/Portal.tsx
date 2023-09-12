import ReactDOM from 'react-dom'
import { PotalProps } from '../../interfaces/CommonTypes'
import { Ingame, ZoomImg, SnackBar } from '../modal'

const Portal = ({ type, src, onclick, snackBar, nickname }: PotalProps) => {
  const portalRoot = document.getElementById('portal')

  let componentToRender = null

  if (type === 'Ingame') {
    componentToRender = <Ingame onclick={onclick} nickname={nickname} />
  } else if (type === 'ZoomImg') {
    componentToRender = <ZoomImg onclick={onclick} src={src} />
  } else if (type === 'SnackBar') {
    componentToRender = <SnackBar type={snackBar} />
  }

  return portalRoot ? ReactDOM.createPortal(componentToRender, portalRoot) : null
}

export default Portal
