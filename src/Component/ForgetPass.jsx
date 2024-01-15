import React from 'react'
import '../CSS files/Forgetpass.css';

const ForgetPass = () => {
  return (
    <div>
     <div className="container-flude">
        <div className="row">
            <div className="col-7">
                <div >
                    <img className="rightimgfor" src="image/forg.png" alt="" />
                </div>
            </div>
            <div className="col-5">
                <div className="rightside">
                    <img className='dashimg' src="image/dashboard.png" alt="" />    
                    <p className='forgtcs'>Forgot your password?</p>
                </div>
               
                <form action="">
                    <div className="emaillable">
                        <label htmlFor="">Email</label><br />
                        <input className='emailinput' type="email" />
                    </div> <br />

                    <button className='btnrsest'>Reset</button> <br /> <br />
                <a className='loginlink' href="/login">Back to Login</a>
                <p className='spancss'>Didn't get an email? Check your spam folder...!
                <br />
                <a href="">Re-enter your email and try again</a></p>
          

                </form>
            </div>
        </div>
     </div>
    </div>
  )
}

export default ForgetPass
