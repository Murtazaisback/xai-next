'use client'

import * as Clerk from '@clerk/elements/common'
import * as SignUp from '@clerk/elements/sign-up'

export default function SignUpPage() {
  return (
  <SignUp.Root >
    <SignUp.Step name="start">
        <h3 className='Sign_h3'>Sign Up</h3>
        <p className='Sign_p'>Create New Xai Presale Account</p>
        <div className="sign_inputs">
        <Clerk.Field name="username">
          <Clerk.Input className='Sign_input' placeholder='Your Name'/>
          <Clerk.FieldError className='Input_Error'/>
        </Clerk.Field>
        <Clerk.Field name="emailAddress">
          <Clerk.Input className='Sign_input' placeholder='Your Email'/>
          <Clerk.FieldError />
        </Clerk.Field>
        <Clerk.Field name="password">
          <Clerk.Input className='Sign_input' placeholder='Password'/>
          <Clerk.FieldError className='Input_Error'/>
        </Clerk.Field>
        <div className="Checkbox_warp">
          <input type="checkbox" />
          <p>I agree to the <a href="">Terms and Conditions </a> and <a href="">Privacy and Policy.</a></p>
        </div>
        </div>
        <SignUp.Captcha />
        <SignUp.Action submit className='Action_btn' >Sign up</SignUp.Action>
        
        <p className='already_p'>
        Already have an account ?{''}
        <Clerk.Link navigate='sign-in' className='bold_a' >
        Sign in instead
        </Clerk.Link>
        </p>
      </SignUp.Step>

      <SignUp.Step name="continue">
        <h2 className='Sign_h3'>Fill in missing fields</h2>
    <div className="sign_inputs">

        <Clerk.Field name="username">
          <Clerk.Input className='Sign_input' placeholder='Your Name'/>
          <Clerk.FieldError className='Input_Error' />
        </Clerk.Field>
    </div>

        <SignUp.Action submit className='Action_btn'>Continue</SignUp.Action>
      </SignUp.Step>

      <SignUp.Step name="verifications">
        <SignUp.Strategy name="phone_code">
          <h3 className='Sign_h3'>Check your phone for an SMS</h3>

          <Clerk.Field name="code">
            <Clerk.Input placeholder='Enter Phone Code'className='Sign_input'/>
            <Clerk.FieldError className='Input_Error'/>
          </Clerk.Field>

          <SignUp.Action submit className='Action_btn'>Verify</SignUp.Action>
        </SignUp.Strategy>

        <SignUp.Strategy name="email_code">
          <h3 className='Sign_h3' style={{marginBottom:'40px'}}>Check your email</h3>

          <Clerk.Field name="code">
            <Clerk.Input className='Sign_input' placeholder='Enter Email Code'/>
            <Clerk.FieldError className='Input_Error'/>
          </Clerk.Field>

          <SignUp.Action submit className='Action_btn' >Verify</SignUp.Action>
        </SignUp.Strategy>
      </SignUp.Step>
  </SignUp.Root>
  )
}