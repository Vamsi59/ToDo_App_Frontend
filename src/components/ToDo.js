import React from 'react'

import {BiEdit} from 'react-icons/bi'
import {AiFillDelete} from 'react-icons/ai'
const ToDo = ({text,UpdateMode,deleteToDO}) => {
  return (
    <div className="todo">
        <div className="text">{text}</div>
        <div className="icons">
            <BiEdit className='icon' onClick={UpdateMode}/>
            <AiFillDelete className='icon' onClick={deleteToDO}/>        
        </div>
        
    </div>
  )
}

export default ToDo
