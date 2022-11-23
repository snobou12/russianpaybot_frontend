import React,{FC} from 'react'
import { Navigation } from '../../components'
import "./WebContent.scss"
const WebContent:FC=()=> {
  return (
    <div className='ap__wcontent ap__page'>
        <Navigation />
        WebContent
    </div>
  )
}

export default WebContent