import { RouterProvider } from 'react-router-dom'
import router from './routes.jsx'

import { Toaster } from 'sonner'

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  )
}
