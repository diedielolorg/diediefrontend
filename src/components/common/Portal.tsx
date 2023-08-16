import ReactDOM from 'react-dom'
import { PotalProps } from '../../interfaces/CommonTypes'
import { Ingame, ZoomImg } from '../modal'

const Portal = ({ type, src, onclick }: PotalProps) => {
  const portalRoot = document.getElementById('portal')

  let componentToRender = null

  if (type === 'Ingame') {
    componentToRender = <Ingame onclick={onclick} />
  } else if (type === 'ZoomImg') {
    componentToRender = <ZoomImg onclick={onclick} src={src} />
  }

  return portalRoot ? ReactDOM.createPortal(componentToRender, portalRoot) : null
}

export default Portal
