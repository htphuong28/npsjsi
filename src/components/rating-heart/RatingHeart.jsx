import React from 'react'

const RatingHeart = (props) => {
    const {checkCount,setCheckCount} =props

  return (
    <div>
        <div className="rating gap-1">
  <input 
  type="radio" 
  name="rating-3"
  checked= {checkCount===1?true:false} 
  onChange={() => setCheckCount(1)}
  className="mask mask-heart bg-red-400" />
  <input 
  type="radio" 
  name="rating-3" 
  checked= {checkCount===2?true:false}
  onChange={()=> setCheckCount(2)}
  className="mask mask-heart bg-orange-400" 
  />
  <input type="radio" name="rating-3" 
  checked= {checkCount===3?true:false}
  onChange={()=> setCheckCount(3)}
  className="mask mask-heart bg-yellow-400" />
  <input type="radio" name="rating-3" 
  checked= {checkCount===4?true:false}
  onChange={()=> setCheckCount(4)}
  className="mask mask-heart bg-lime-400" />
  <input type="radio" name="rating-3"
  checked= {checkCount===5?true:false}
  onChange={()=> setCheckCount(5)}
  className="mask mask-heart bg-green-400" />
</div>
    </div>
  )
}

export default RatingHeart