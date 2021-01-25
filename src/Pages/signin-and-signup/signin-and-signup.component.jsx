import React from 'react';

import SignIn from '../../Components/sign-in/signin.component';
import SignUp from '../../Components/sign-up/sign.up.component';

import './signin-and-signup.styles.scss';

const SignInSignUp = () => (
    <div className='sign-in-and-sign-up'>
        <SignIn/>
        <SignUp/>
    </div>
);

export default SignInSignUp;