import React from 'react'
import { useState } from 'react'
import useProfile from '../../store/useProfile'

const UpdateProfile = () => {
    const {profile, details, setProfile, setDetails} = useProfile()
    const [localProfile, setLocalProfile] = useState(profile)
    

  return (
    <div className='flex flex-1 h-full w-full items-center flex-col gap-4'>
        {/* update profile */}
        <input 
        type="text"
        value={localProfile.name} 
        placeholder='Write your name'
        onChange={(e) => setLocalProfile(
            {
                ...localProfile,
                name: e.target.value
            }
        )}
        className="input input-bordered input-primary w-full max-w-xs"
        />

        <input 
        type="number"
        value={localProfile.age}
        placeholder='Enter your age'
        onChange={(e) => setLocalProfile(
            {
                ...localProfile,
                phoneNum: e.target.value
            }
        )}
        className="input input-bordered input-primary w-full max-w-xs"
        />

        <input 
        type="text"
        value={localProfile.gender}
        placeholder='Enter your gender'
        onChange={(e) => setLocalProfile(
            {
                ...localProfile,
                gender: e.target.value
            }
        )}
        className="input input-bordered input-primary w-full max-w-xs"
        />

        <input 
        type="text"
        value={localProfile.phoneNum}
        placeholder='Enter your phone num'
        onChange={(e) => setLocalProfile(
            {
                ...localProfile,
                phoneNum: e.target.value
            }
        )}
        className="input input-bordered input-primary w-full max-w-xs"
        />

        <button
        onClick={()=> setProfile(localProfile)}
        className='btn btn-info'>
            Update your profile
        </button>
    </div>
  )
}

export default UpdateProfile