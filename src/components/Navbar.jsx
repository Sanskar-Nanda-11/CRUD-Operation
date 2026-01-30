import React ,{useState}from 'react'


const Navbar = () => {
    
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
          <a href=""className='text-slate-600 hover:text-indigo-600 transition-colours'> Home </a>
          <a href=""className='text-slate-600 hover:text-indigo-600 transition-colours'> Analysis </a>
          </div>        
      </div>
    </nav>
  </>
  )
}

export default Navbar
