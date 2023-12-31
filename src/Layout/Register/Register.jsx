import img from '../../assets/images/login/login.svg'
import fb from '../../assets/icons/fb.png'
import google from '../../assets/icons/google 1.png'
import linkdin from '../../assets/icons/linkdin.png'
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import Swal from 'sweetalert2';
const Register = () => {
  const {signWithForm,googleSignIn} = useContext(AuthContext)
  const [error, setError] = useState('')
  const handleSignUp = e => {
        e.preventDefault();
        const form = e.target
        const name = form.name.value 
        const email = form.email.value
        const password = form.password.value
        signWithForm( email, password)
        .then( result => {
          const user = result.user
         if(user) {
          Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Registration Success',
            showConfirmButton: false,
            timer: 1500
          })
          form.reset()
         }
      })
      .catch(error => {
        setError(error.message);
        if(error) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${error.message}`,
           
          })
        }
      })
        
  }
  
  const handleGoogle = () => {
    googleSignIn()
    .then(result => {
      const user = result.user
      console.log(user)
    })
    .catch(error => {
      console.error(error.message)
    })
  }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className='me-20'>
        <img src={img} alt="" />
        </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSignUp} className="card-body"> 
            <h1 className='font-bold text-center text-[30px] text-[#444]'>Sign Up</h1>
              <div  className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input name='name' type="text" placeholder="Name" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input name='email' type="text" placeholder="Email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input name='password' type="text" placeholder="Password" className="input input-bordered" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn hover:bg-orange-700 hover:text-white bg-orange-600 text-white">Sign Up</button>
              </div>
              <p className='text-orange-600'>{error}</p>
              <div>
                <p className='mt-2 text-center text-[14px] text-[#444] font-[500]'>Or Sign Up with</p>
              <div className='flex  justify-center items-center'>
                <img className='w-7 mr-2 mt-3' src={fb} alt="" />
               <Link onClick={handleGoogle}> <img className='w-7 mr-2 mt-3' src={google} alt="" /> </Link>
                <img className='w-7 mr-2 mt-3' src={linkdin} alt="" />
              </div>
              <p className='text-center mt-4 text-[14px] font-[400]'>Already have an account? <Link to='/login' className='text-orange-600 font-bold'>Login</Link></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Register;