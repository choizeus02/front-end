import React from 'react'
import { Link } from 'react-router-dom'
import time from '../../../assets/chat/time.svg'
import house from '../../../assets/chat/house.svg'
function ProgramItem({counselor}) {
  return (
    <Link to={`/program/${counselor.id}`}>
       <li className='program-card'>
                <h3 className='program-title'>{counselor?.name}</h3>
                    <div className='time-place-wrap'>
                        <img src={time} alt='time'/>
                        <p>{counselor?.time}</p>
                        <img src={house} alt='house'/>
                        <p>{counselor?.place}</p>
                    </div>
                    <div className='program-desc'>
                        {counselor?.keyWords.map((item)=><p className='keyword'>{item.word}</p>)}
                    </div>
           
      </li>
    </Link>
   
  )
}

export default ProgramItem