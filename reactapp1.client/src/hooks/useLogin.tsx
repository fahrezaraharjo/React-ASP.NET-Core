import { useApiMutation } from './useApiMutation'
import { showSuccessToast, showErrorToast } from '../utils/toast'
import type { UseFormSetError } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'


type LoginPayload = {
  username: string
  password: string
}

type LoginResponse = {
  status: number
  message: string
  data: string
}

export const useLogin = (setError: UseFormSetError<LoginPayload>) => {
  const navigate = useNavigate()

  return useApiMutation<LoginResponse, LoginPayload>({
    url: '/api/auth/login',
    method: 'POST',
    options: {
      onSuccess: (data) => {
        sessionStorage.setItem('token', data.data)
        showSuccessToast('Login berhasil!')
        navigate('/report'); 
      },
      onError: () => {
        setError('username', {
          type: 'manual',
          message: 'Login gagal. Periksa kembali username atau password.',
        })
        showErrorToast('Login gagal. Username atau password salah.')
      },
    },
  })
}
