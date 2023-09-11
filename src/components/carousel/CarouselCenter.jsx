import React from 'react'
import stockImg1 from '../../assets/img/stock1.jpg'
import stockImg2 from '../../assets/img/stock2.jpg'


const CarouselCenter = (props) => {
    const {children} = props


  return (
    <div>
        <div className="carousel carousel-center rounded-box w-[1000px]">
            {children}
            
                
            
            
        </div>
    </div>
  )
}

export default CarouselCenter