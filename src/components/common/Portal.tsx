import ReactDOM from 'react-dom'
import { PotalProps } from '../../interfaces/CommonTypes'
import { Ingame } from '../modal'

const Portal = ({ type, onclick }: PotalProps) => {
  const portalRoot = document.getElementById('portal')

  let componentToRender = null

  if (type === 'Ingame') {
    componentToRender = <Ingame onclick={onclick} />
  }

  return portalRoot ? ReactDOM.createPortal(componentToRender, portalRoot) : null
}

export default Portal
