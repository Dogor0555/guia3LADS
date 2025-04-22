interface LoadingSpinnerProps {
    fullScreen?: boolean
    message?: string
  }
  
  const LoadingSpinner = ({ fullScreen = false, message }: LoadingSpinnerProps) => {
    return (
      <div className={`flex flex-col items-center justify-center ${fullScreen ? 'min-h-screen' : 'py-12'}`}>
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500 mb-4"></div>
        {message && <p className="text-violet-300">{message}</p>}
      </div>
    )
  }
  
  export default LoadingSpinner