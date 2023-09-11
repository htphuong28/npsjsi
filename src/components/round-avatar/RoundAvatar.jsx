import React from 'react'

const RoundAvatar = (props) => {
    const {imgSrc, isOnline} = props

  return (
    <div>
        <div className={`avatar ${isOnline?"online":"offline"}`}>
  <div className="w-24 rounded-full">
    <img src={imgSrc} />
  </div>
</div>
    </div>
  )
}

export default RoundAvatar