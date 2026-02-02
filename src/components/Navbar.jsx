import React, { useState } from 'react'
import onAddMember from '../App.jsx'


const Navbar = (onAddMember) => {

  const [isopen, setisopen] = useState(false);

  return (
    <>
      <nav className="bg-white border-b px-6 py-4">
        <div className='container mx-auto flex justify-between items-center'>


          {/* logo */}
          <h1 className='font-bold text-xl text-slate-800'>
            Edu <span className='text-indigo-600'>Flow</span>
          </h1>

          {/* actual nav item links  */}
          <div className="flex gap-6 items-center">
            <a href="" className='text-slate-600 hover:text-indigo-600 transition-colours'> Home </a>
            <a href="" className='text-slate-600 hover:text-indigo-600 transition-colours'> Analysis </a>
            <a href=""> <button type='button' onClick={onAddMember}className='bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors PlusCircle hover:cursor-pointer'> Add Member </button></a>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
