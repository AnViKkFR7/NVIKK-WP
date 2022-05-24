import React from 'react'
import SignInSection from '../components/SignInSection'
import { SignInData } from '../components/SignInSection/Data'

const SignInPage = () => {
  return (
    <>
     <SignInSection {...SignInData}/>
    </>
  )
}

export default SignInPage