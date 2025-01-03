'use client'

import * as Clerk from '@clerk/elements/common'
import * as SignIn from '@clerk/elements/sign-in'
import Link from 'next/link'
import React from 'react';


export default function SignUpPage() {
  

  return (
    <SignIn.Root>
      <SignIn.Step name="start">
        <h3 className='Sign_h3'>Sign In</h3>
        <p className='Sign_p'>Create New Xai Presale Account</p>
        <Clerk.GlobalError className='Input_Error' />
        <div className="sign_inputs">

          <Clerk.Field name="identifier">
            <Clerk.Input className='Sign_input' placeholder='Your Email' />
            <Clerk.FieldError className='Input_Error' />
          </Clerk.Field>
          <Clerk.Field name="password">
            <Clerk.Input className='Sign_input' placeholder='Password' type='password' required />
            <Clerk.FieldError className='Input_Error' />
          </Clerk.Field>
          <div className="Checkbox_warp">
            <input type="checkbox" />
            <p>I agree to the <a href="">Terms and Conditions </a> and <a href="">Privacy and Policy.</a></p>
          </div>
        </div>
        <SignIn.Action submit className='Action_btn' >Sign In</SignIn.Action>

        <p className='already_p'>
          Don’t have an account?{' '}
          <Link href="/sign-up" className='bold_a'>
            Sign Up instead
          </Link>
        </p>
      </SignIn.Step>


      <SignIn.Step name="verifications">


        <SignIn.Strategy name="email_code">
          <h3 className='Sign_h3' style={{ marginBottom: '40px' }}>Check your email</h3>

          <Clerk.Field name="code">
            <Clerk.Input className='Sign_input' placeholder='Enter Email Code' />
            <Clerk.FieldError className='Input_Error' />
          </Clerk.Field>

          <SignIn.Action submit className='Action_btn'>Verify</SignIn.Action>
        </SignIn.Strategy>
      </SignIn.Step>
    </SignIn.Root>
  )
}