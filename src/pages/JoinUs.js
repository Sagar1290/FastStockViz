import React, { useState } from 'react'

const Login = ({ isLogin, setIsLogin }) => {
    const handleToggle = () => {
        setIsLogin(!isLogin)
    }
    return (
        <section>
            <h2 className='mx-auto'>
                Log in
            </h2>
            <form action='' className='mb-3 mx-auto'>
                <div className='form-group ' >
                    <label htmlFor='email' className='form-label'>Email:</label>
                    <input type='email' className='form-control' name='email' />
                </div>
                <div className='form-group '>
                    <label htmlFor='password' className='form-label'>password: </label>
                    <input type='text' className='form-control' name='password' />
                </div>
                <button type='submit' className='btn btn-primary mt-3'>Sign In</button>
            </form>
            <span>Don't have an account! <span onClick={handleToggle}>Create New Account</span></span>
        </section>
    )
}

const Signin = ({ isLogin, setIsLogin }) => {
    const handleToggle = () => {
        setIsLogin(!isLogin)
    }
    return (
        <div>
            <form>
                <div class="mb-3">
                    <label for="name" class="form-label">Enter your name</label>
                    <input type="text" class="form-control" id="name" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" />
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="Password1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="Password1" />
                </div>
                <div class="mb-3">
                    <label for="Password1" class="form-label">re-type your Password</label>
                    <input type="password" class="form-control" id="Password1" />
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="terms-check" />
                    <label class="form-check-label" for="terms-check">you agree to our terms and condition</label>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>

            </form>
            <span>Already have an account! <span onClick={handleToggle} className='text-underline'>Login in here</span></span>
        </div>
    )
}

const JoinUs = () => {

    const [isLogin, setIsLogin] = useState(true);

    return (
        <>
            <div className='login w-50 mx-auto mt-5'>
                {
                    (isLogin) ? <Login isLogin={isLogin} setIsLogin={setIsLogin} /> : <Signin isLogin={isLogin} setIsLogin={setIsLogin} />
                }
            </div>
        </>
    )
}

export default JoinUs