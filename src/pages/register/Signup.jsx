import React from 'react'
import Header from '../../components/header/Header'
import { useState } from 'react'
import { auth } from '../../firebase/firebase.config'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider
} from 'firebase/auth'

const Signup = () => {

    const [signUpInfo, setSignUpInfo] = useState(
      {
        email: '',
        password: ''
      }
    )

    const handleSignUpAccount = async (e) => {
      e.preventDefault()
        
        try{
          const userCredential = await createUserWithEmailAndPassword(auth,signUpInfo.email, signUpInfo.password)
          const user = userCredential.user
          console.log(user)
          
        }
        catch(error) {console.log(error)}
    }


    const handleSignInWithGoogle = async (e) => {
      e.preventDefault()
      try {
      const provider = new GoogleAuthProvider()
      const userInfo = await signInWithPopup(auth, provider)
      const user = userInfo
      }
        catch(error) {
          console.log(error)
        }
    }
    

  return (
    <div>
        {/* <Header 
        headerText={'Day la header cua trang sign up'} 
        subTitle ={'Subtitle cua trang sign up'}
        bgColor ={'bg-blue-500'}
        onClickHeader={showAlert}/> */}

        <form
          autoComplete="off"
          className="w-full max-w-[600px] p-10 bg-white rounded-lg shadow"
          aria-label="signup-form"
        >
          <h2 className="mb-10 text-3xl font-bold text-center">Sign Up Form</h2>
          <div className="flex flex-col items-start mb-5 gap-y-3">
            <label htmlFor="email" className="text-sm font-medium cursor-pointer">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={signUpInfo.email}
              onChange={e => setSignUpInfo(
                {
                  ...signUpInfo,
                  email: e.target.value,
                }
              )}
              className="w-full p-4 bg-transparent border border-gray-200 rounded-lg outline-none"
              placeholder="Enter your email address..."
            />
          </div>
          <div className="flex flex-col items-start mb-5 gap-y-3">
            <label
              htmlFor="password"
              className="text-sm font-medium cursor-pointer"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={signUpInfo.password}
              onChange={e=> setSignUpInfo({
                ...signUpInfo,
                password: e.target.value
              })}
              className="w-full p-4 bg-transparent border border-gray-200 rounded-lg outline-none"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex items-center justify-end mb-5 text-slate-400">
            <p>Already have an account?</p>
            <a href="#" className="text-blue-500 underline">
              Sign In
            </a>
          </div>
          <button
            type="submit"
            onClick={e=>handleSignInWithGoogle(e)}
            className="inline-flex w-full items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[60px]"
          >
            Create an account
          </button>
        </form>
    </div>
  )
}

export default Signup