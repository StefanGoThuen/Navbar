import React from "react";
import { NavLink } from "react-router-dom";
import './styles.css'

const SignUp = () => {
  return (
    <div className='d-flex justify-content-center align-items-center 100-w vh-100 bg-primary'>
        <div className='form_container p-5 rounded bg-white'>
        <form>
            <h3 className='text-center'>Sing Up</h3>
            <div className='mb-2'>
                <label htmlFor="firstName">Fornavn: </label>
                <input type="text" placeholder='Fornavn' className='form-control'/>
            </div>

            <div className='mb-2'>
                <label htmlFor="lastName">Etternavn: </label>
                <input type="text" placeholder='Etternavn' className='form-control'/>
            </div>
            
            <div className='mb-2'>
                <label htmlFor="email">E-post: </label>
                <input type="email" placeholder='e-post@eksempel.com' className='form-control'/>
            </div>
            
            <div className='mb-2'>
                <label htmlFor="password">Passord: </label>
                <input type="password" placeholder='Passord' className='form-control'/>
            </div>

            <div className='d-grid'>
                <button className='btn btn-primary'>Sign Up</button>
            </div>

            <p className='text-end mt-2'>
                Allerede en bruker?<NavLink to="/signin" activeStyle className='ms-2'>
            Login
          </NavLink>
            </p>

        </form>
        </div>
    </div>
  );
};

export default SignUp;
