import React from 'react'
import {X} from 'lucide-react'; // Importing an 'X' icon from the lucide-react library for closing the modal

const StudentsModel = ({isOpen , onClose}) => {  
    // if(!isOpen == null)

    if(!isOpen ) return null;
  return (
    <>
    <div className='fixed insert-0 z-50 flex items-center justify-center p-4'>
        <div className='absolute insert-0 bg-slate-900/60 backdrops-blur-sm' onClick={onClose}></div>
        <div className='relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden transform transition-all'>
            <div className='p-6'>
                <div className='flex justify-between items-center mb-6'>
                    <h2 className='text-xl font-bold text-slate-800'>
                    </h2>
                    <button className='text-slate-400 hover:text-slate-600'>
                        <X size={24}/>
                    </button>
                </div>
                <div className='space-y-4'>
                    <p className='text-slate-500 text-sm'>
                        Enter the details bellow to add your data on EduFlow system
                    </p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default StudentsModel
