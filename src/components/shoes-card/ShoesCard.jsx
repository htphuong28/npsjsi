import React from 'react'

const ShoesCard = (props) => {
    const {imgSrc, name, des, buttonText} = props

  return (
    <div>
        <div className="card h-[350px] w-[250px] bg-base-100 shadow-xl">
            <figure><img src={imgSrc} alt={name} className='w-full h-[50%]' /></figure>
            <div className="card-body w-full h-[50%]">
              <h2 className="card-title">{name}</h2>
              <p>{des}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">{buttonText}</button>
              </div>
            </div>
</div>
    </div>
  )
}

export default ShoesCard