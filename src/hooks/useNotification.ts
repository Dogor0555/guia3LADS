import { toast } from 'react-toastify'

const useNotification = () => {
  const notify = (message: string, type: 'success' | 'error' | 'info' = 'info') => {
    toast[type](message, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    })
  }

  return { notify }
}

export default useNotification