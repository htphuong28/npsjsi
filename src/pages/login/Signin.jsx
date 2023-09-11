import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import { Icons } from '../../assets/svg'

const Signin = () => {
  const signInAlert = () =>{
    alert('Day la header cua trang Sign in')
  }

  return (
    <div className='w-full h-100 '>
        {/* phần header */}
        <Header 
          headerText={'This is sign in page'} subTitle = {'Sign in subtitle'}
          bgColor ={'bg-red-500'}
          onClickHeader = {signInAlert}
        />
        {/* phần content */}
        <div>
            <p>Day la content</p>
            <Icons.ChatIcon height={24} width={24} fill={'#71C9CE'}/>
        </div>
        {/* phần footer */}
        <Footer/>
    </div>
  )
}

export default Signin