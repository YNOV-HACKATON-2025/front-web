
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="w-screen min-h-screen bg-slate-100 flex justify-center items-center rounded-xl overflow-hidden">
      {/* Container parent */}
      <div className="w-[calc(100dvw-80px)] h-[calc(100dvh-100px)] flex bg-white rounded-xl">
        <Sidebar />

        <div className="w-[calc(100%-80px)] h-full flex flex-col">
            {/* <Navbar /> */}
            <div className="overflow-y-auto">
                <Outlet />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Layout