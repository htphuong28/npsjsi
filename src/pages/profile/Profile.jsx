import { useState } from 'react'
import React from 'react'
import useProfile from '../../store/useProfile'
import UpdateProfile from '../../components/update-profile/UpdateProfile'

const Profile = () => {

    const {profile, details} = useProfile()
    


  return (
    <div className='w-full h-full flex flex-1 justify-center items-center flex-col gap-3'>
        <div className='w-3/4 h-1/2 rounded-x1 bg-white'>
            <div className='h-3/4 w-full bg-orange-200'>
                <img src={details.coverUrl} alt="" className='h-full w-full' />
            </div>
            {/* avatar */}
            <div className='w-[100px] h-[100px] rounded-full absolute top-0 bg-white'>
               <img src={details.avatarUrl} alt="" /> 
            </div>
            <div>
                <div>
                    {profile.name}, {profile.age}
                </div>
            </div>
        </div>

        <UpdateProfile/>
    </div>
  )
}

export default Profile