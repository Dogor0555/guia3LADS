import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Layout from './components/Layout'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <AppRoutes />
        <ToastContainer />
      </Layout>
    </BrowserRouter>
  )
}

export default App