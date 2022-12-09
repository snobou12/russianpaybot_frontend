import React,{FC} from 'react'
import "./AdminPanel.scss";

import { Header, Navigation } from './components';
const AdminPanel:FC =()=> {
  
  return (
    <div className='admin-panel ap__page'>
      <Header />
      <Navigation />
      <div className="ap__page_content">
        <div className="ap__page_inner">
          Home
        </div>
      </div>
    </div>
  )
}

export default AdminPanel