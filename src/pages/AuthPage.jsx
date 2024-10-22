import { Loader2 } from 'lucide-react';
import React from 'react'
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import AuthService from '../services/AuthService';
import { toast } from 'react-toastify';
import { storeLogin } from '../store/authSlice';


export default function AuthPage() {
  const dispatch = useDispatch();

  const [authPage, setAuthPage] = React.useState('login');

  const {mutate: submitForm, isPending: isLoading} = useMutation({
    mutationFn: authPage ==="login" ?  AuthService.login : AuthService.register,
    onSuccess: (data) => {
      dispatch(storeLogin(data.data.user));
    },
    onError: (error) => {
      toast.error(error.message, {type:"error"});
    }
  })

  const {register, handleSubmit, formState: {errors}} = useForm({
    defaultValues: {
      fullname: '',
      email: '',
      password: '',
    },
  });

  

  const onSubmit = handleSubmit(async(data) => {
    submitForm(data);
  })
  

  return (
    <div className='min-h-[80vh] flex items-center justify-center '>
      <form 
      onSubmit={onSubmit}
      className='flex flex-col gap-2.5 m-auto items-start p-5 rounded-xl border border-gray-200 shadow-lg text-sm min-w-[340px] sm:min-w-96 text-slate-600 bg-white'
      >
          <p className='text-2xl font-semibold m-auto'>
            {authPage === 'login' ? 'Login to continue' : 'Create new Account'}
          </p>
        {
          authPage === 'register' && 
            <div className='flex flex-col w-full'>
              <label htmlFor="fullname">Full Name</label>
              <input type="text" {...register('fullname')} id='fullname' className='border border-slate-300 rounded w-full p-2 mt-1' />
            </div>
        }
      

        <div className='flex flex-col w-full'>
          <label htmlFor="email">Email</label>
          <input 
          type="email" 
          id='email' 
          {...register('email', {required: "Email is required"})} 
          className='border border-slate-300 rounded w-full p-2 mt-1' 
          />
          {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
        </div>

        <div className='flex flex-col w-full'>
          <label htmlFor="password">Password</label>
          <input 
          type="password" 
          id='password'  
          className='border border-slate-300 rounded w-full p-2 mt-1' 
          {...register("password", {
            required: "this field is required", 
            minLength: {value: 6, message: "Password must be at least 6 characters"}
          })}

          />
          {errors.password && (
            <span className="text-red-600">{errors.password.message}</span>
          )}
        </div>
        <button type="submit" disabled={isLoading} className='w-full flex justify-center items-center gap-2 bg-blue-600 text-white py-2 rounded mt-2' >
          {
            isLoading ? <><Loader2 className='w-4 h-4 animate-spin' /> Please wait..</> : authPage === 'login' ? 'Login' : 'Submit'
          }
        </button>
        <div className='flex gap-2'>
          <p>{ authPage === 'login' ? "Don't have an account?" : 'Already have an account?' }</p>
          <span 
          className='font-medium text-blue-500 cursor-pointer' 
          onClick={() => authPage === "login" ? setAuthPage("register") : setAuthPage("login")}
          >{authPage === 'login' ? 'Create Account' : 'Login'}</span>
        </div> 
        
      </form>
    </div>
  )
}
