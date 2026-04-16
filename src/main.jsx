import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './routes/Routes'
import FriendsContext from './context/FriendsContext'
import { ToastContainer } from 'react-toastify'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FriendsContext>
      <RouterProvider router={router} />
      <ToastContainer />
    </FriendsContext>
  </StrictMode>,
)
