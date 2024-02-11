import React, { Suspense } from 'react'
import Navbar from '../components/Navbar'

import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div className="flex">
      {/* Side Navigation Bar */}
      <Navbar />
      {/* Main component on basis of selected navigation from nav bar */}
      <main className="grow">
        <Suspense fallback={<h1>Loading...</h1>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  )
}

export default Home
