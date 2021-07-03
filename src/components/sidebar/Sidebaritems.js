import React from 'react'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'
import '../../styles/Sidebaritems.css'

const Sidebaritems = ({ arrow, icon, label }) => {
  return (
    <div className='sidebarItems'>
      <div className='sidebarItems_arrow'>

        {arrow && (<ArrowRightIcon />)}
      </div>
      <div className='sidebarItems_main'>
        {icon}
        <p>{label}</p>
      </div>

    </div>
  )
}

export default Sidebaritems
