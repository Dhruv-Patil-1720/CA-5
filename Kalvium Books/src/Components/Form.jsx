import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import "./Forms.css"
import logoImage from '../assets/Screenshot_2024-01-30_at_2.55.10_PM-removebg-preview.png';

const Form = () => {
    // State to track registration status
    const [isRegistered, setIsRegistered] = useState(false);
    
    // Form hook for form validation
    const { register, handleSubmit, formState: { errors }, watch } = useForm();

    // Function to handle form submission
    const onSubmit = (data) => {
        console.log(data); // console logging the form data
        setIsRegistered(true); // Set registration status to true
    };

    // Watching for changes in password and repeat password fields
    const password = watch('password', '');
    const repeatPassword = watch('repeatPassword', '');

    return (
        <div className='container no-bg-image'>
 
            {/* Conditionally rendering the  registration success message */}
            {isRegistered ? (
                <div>
                    <p style={{ fontSize: '30px' }}>Registration Successful!!</p>
                </div>
            ) : (
                <form className='form' onSubmit={handleSubmit(onSubmit)}>
                    <img src={logoImage} alt="Kalvium Books Logo" style={{ height: "100px",width:"200px",marginLeft:"80px"}} ></img>
                    {/* Name field */}
                    <label>Name:</label>
                    <input
                        type='text'
                        {...register('name', {
                            required: 'Name is required',
                            minLength: {
                                value: 3,
                                message: 'Name should be at least 3 characters long',
                            },
                            maxLength: {
                                value: 30,
                                message: 'Name should not exceed 30 characters',
                            },
                        })}
                    />
                    {errors.name && <p className='err'>{errors.name.message}</p>}
                    
                    {/* Email field */}
                    <label>Email:</label>
                    <input
                        type='email'
                        {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /^\S+@\S+$/i,
                                message: 'Invalid email address',
                            },
                        })}
                    />
                    {errors.email && <p className='err'>{errors.email.message}</p>}
                    
                    {/* Password field */}
                    <label>Password:</label>
                    <input
                        type='password'
                        {...register('password', {
                            required: 'Password is required',
                            minLength: {
                                value: 10,
                                message: 'Password should be at least 10 characters long',
                            },
                            pattern: {
                                value: /^(?=.*[!@#$%^&*])\S+$/,
                                message: 'Password should contain at least one special character',
                            },
                        })}
                    />
                    {errors.password && <p className='err'>{errors.password.message}</p>}
                    
                    {/* Repeat Password field */}
                    <label>Repeat Password:</label>
                    <input
                        type='password'
                        {...register('repeatPassword', {
                            required: 'Please repeat your password',
                            validate: (value) =>
                                value === password || 'The passwords do not match',
                        })}
                    />
                    {errors.repeatPassword && <p className='err'>{errors.repeatPassword.message}</p>}
                    
                    {/* Submit button */}
                    <input className='btn' type='submit' value='Sign up'/>
                </form>
            )}
        </div>
    );
};

export default Form;
