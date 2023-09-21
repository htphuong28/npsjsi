import React, { useState, useEffect } from 'react'
import Signin from '../login/signin'
// import Signup from '../register/signup'
import Navbar from '../navbar/Navbar'
import ShoesCard from '../../components/shoes-card/ShoesCard'
import RoundAvatar from '../../components/round-avatar/RoundAvatar'
import InputFormLabels from '../../components/input-with-form-control-labels/InputFormLabels'
import RatingHeart from '../../components/rating-heart/RatingHeart'
import Product from '../product/Product'
import CarouselCenter from '../../components/carousel/CarouselCenter'
import ModalClickOut from '../../components/modal/ModalClickOut'
import Dictionary from '../product/Dictionary'
import Tooltip from '../../components/tooltip/Tooltip'
import Quote from '../quote/Quote'
import SearchQuote from '../quote/SearchQuote'
import Profile from '../profile/Profile'
import Gestures from '../../components/gesture/Gestures'
import CardGesture from '../../components/card-gesture/CardGesture'


const HomePage = () => {
    // code logic
    // const [countNumber, setCountNumber] = useState(3)
    // const [isRound, setIsRound] = useState(false)
    // const [inputValue, setInputValue] = useState(null)

    // const [inputValue, setInputValue] = useState('')

    // const [checkCount,setCheckCount] = useState(5)
    // const handleDecrease1 = () =>{
    //   setCountNumber(prev => prev -1)
    // }

    // const handleIncrease1 =() =>{
    //   setCountNumber(prev => prev +1)
    // }

    // const handleReset = () => {
    //   setCountNumber(3)
    // }

    // const handleIncreaseInput = () =>{
    //   setCountNumber(prev => prev + +inputValue)
    // }

    // const handleDecreaseInput =() =>{
    //   setCountNumber(prev => prev - +inputValue)
    // }
    // console.log(inputValue, 'day la phim minh bam')

    // console.log(inputValue, "day la input from user")
    const [show, setShow] = useState(0)
    const setShowHandle = () => {
      setShow(!show)
    }

    // const [showTooltip,setTooltip] =useState(0)

    // const setTooltipHandle = () => {
    //   setTooltip(!showTooltip)
    // }
  return (
    //code UI
    <div className='h-full w-full flex flex-1 justify-center items-center'>
        {/* <Signin/>
        <Navbar/> */}
        {/* <Signup/> */}
        
          {/* <div className={`h-[90px] w-[200px] bg-pink-50 flex items-center justify-center
          ${isRound?"rounded-[16px]":""}`}>
            <p className='text-[32px] font-semibold text-red'>
              {countNumber}
            </p>
          </div>
          <div className='flex mt-[16px] justify-center items-center '>
            <input 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            type="number" placeholder='Nhap so ban muon' className='px-3 py-2 rounded-[8px]' />
          </div>
          
          <div className='flex gap-8 mt-[16px] cursor-pointer'>
            <div 
            onClick={handleDecreaseInput}
            className='btn-counter'>-input</div>
            <div 
            onClick = {handleDecrease1}
            className='btn-counter'>-1</div>
            <div 
            onClick = {handleReset}
            className='btn-counter'>Reset</div>
            <div 
            onClick ={handleIncrease1}
            className='btn-counter'>+1</div>
            <div
            onClick ={handleIncreaseInput}
            className='btn-counter'>+input</div>
          </div> */}
          {/* <ShoesCard imgSrc ="https://images.pexels.com/photos/19090/pexels-photo.jpg?cs=srgb&dl=pexels-web-donut-19090.jpg&fm=jpg" name ='Nike 101' des ={"Lorem ispum"} buttonText ='Add to cart'/> */}

          {/* <RoundAvatar imgSrc="https://images.pexels.com/photos/19090/pexels-photo.jpg?cs=srgb&dl=pexels-web-donut-19090.jpg&fm=jpg" isOnline ={false} /> */}
          {/* <div className='flex flex-1 justify-center'>
            <InputFormLabels 
            topLeftLabel = 'Top Left'
            topRightLabel = 'Top Right'
            bottomRightLabel = 'Bottom Right'
            bottomLeftLabel ='Bottom Left'
            inputType = 'text'
            inputPlaceholder ='This is placeholder'
            inputValue ={inputValue}
            setInputValue = {setInputValue}
            onFocus={()=> {console.log('On Focus')}}
            onBlur={() => {console.log('On Blur')}}
          
            />
          </div>
          

          <RatingHeart
          checkCount = {checkCount}
          setCheckCount = {setCheckCount}
          /> */}

          
          {/* <CarouselCenter/> */}
          
          {/* <div className='m-5'>
            <Tooltip dataTip = 'hover me to see more'
            tipButtonText = 'Hover me'
            tooltipState = {showTooltip}
            setTooltipState ={setTooltipHandle}
            /> */}
          {/* </div> */}
          
          {/* <Product/> */}

          {/* <Quote/> */}

          {/* <SearchQuote/> */}

          {/* <Profile/> */}
        
          <Gestures/>
          

    </div>
  )
}

export default HomePage