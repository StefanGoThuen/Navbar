import React from "react";
import { NavLink } from "react-router-dom";
import './styles.css'

const SignIn = () => {
  return (
    <div className='d-flex justify-content-center align-items-center 100-w vh-100 bg-primary'>
        <div className='form_container p-5 rounded bg-white'>
        <form>
            <h3 className='text-center'>Login</h3>
            <div className='mb-2'>
                <label htmlFor="email">E-post: </label>
                <input type="email" placeholder='e-post@eksempel.com' className='form-control'/>
            </div>
            
            <div className='mb-2'>
                <label htmlFor="password">Passord: </label>
                <input type="password" placeholder='Enter Password' className='form-control'/>
            </div>

            <div className='mb-2'>
                <input type="checkbox" className='custom-control custom-checkbox' id="check"/>
                <label htmlFor="check" className='custom-input-label ms-2'>
                    Husk meg
                </label>
            </div>

            <div className='d-grid'>
                <button className='btn btn-primary'>Login</button>
            </div>

            <p className='text-end mt-2'>
            Glemt <NavLink to="/about" activeStyle> Passord?</NavLink> 
            <NavLink to="/sign-up" activeStyle className='ms-2'>Sign Up</NavLink>
            </p>
        </form>
        </div>
    </div>
  );
};

export default SignIn;
