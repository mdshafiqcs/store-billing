import React from 'react'
import { useDispatch } from 'react-redux';
import AuthService from '../services/AuthService';
import { useMutation } from '@tanstack/react-query';
import { storeLogout } from '../store/authSlice';
import { toast } from 'react-toastify';
import { Loader2 } from 'lucide-react';

export default function LogoutButton() {

  const dispatch = useDispatch();

  const {mutate: logout, isPending: isLoading } = useMutation({
    mutationFn: AuthService.logout,
    onSuccess: (data) => {
      dispatch(storeLogout());
      toast.success(data.message, {type:"success"});
    },
    onError: (error) => {
      if(error.message === "unauthorized") {
        dispatch(storeLogout());
        toast.success("Logout successfull", {type:"success"});
      } else {
        toast.error(error.message, {type:"error"});
      }
    }
  })


  const handleLogout = () => {
    logout();
  }

  return (
    <button onClick={handleLogout} disabled={isLoading} className="border border-blue-400 text-sm rounded-md px-3 py-1 bg-white min-w-[100px]">
      {
        isLoading ? <div className='flex gap-2 items-center justify-center'>
          <Loader2 className="animate-spin h-5 w-5 text-slate-500" /> 
        </div> : "Logout"
      }
    </button>
  )
}
