import React from 'react'
import NewFile from './NewFile'
import Sidebaritems from './Sidebaritems'
import '../../styles/Sidebar.css'

import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile'
import DevicesIcon from '@material-ui/icons/Devices'
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined'
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder'
import StarBorderIcon from '@material-ui/icons/StarBorder'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline'
import CloudQueueIcon from '@material-ui/icons/CloudQueue'

const index = () => {
  return (
    <div className='sidebar'>
      <NewFile />

      <div className='sidebar_itemContainer'>
        <Sidebaritems arrow icon={(<InsertDriveFileIcon />)} label='My Drive' />
        <Sidebaritems arrow icon={(<DevicesIcon />)} label='Computers' />
        <Sidebaritems icon={(<PeopleAltOutlinedIcon />)} label='Recent' />
        <Sidebaritems icon={(<QueryBuilderIcon />)} label='Recent' />
        <Sidebaritems icon={(<StarBorderIcon />)} label='Starred' />
        <Sidebaritems icon={(<DeleteOutlineIcon />)} label='Trash' />
        <hr />
        <Sidebaritems icon={(<CloudQueueIcon />)} label='Storage' />

      </div>

    </div>
  )
}

export default index
