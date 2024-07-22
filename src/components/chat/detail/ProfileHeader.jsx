import React from 'react'

function ProfileHeader({counselor}) {
  return (
    <div className='profile-header-wrap'>
        <img src={``} className='profile-image' alt='profile-image'/>
        <div className='counselor-info-wrap'>
            <h3 className='name'>{counselor?.name}</h3>
            <p className='desc'>{counselor?.content}</p>
        </div>
        
    </div>
  )
}

export default ProfileHeader