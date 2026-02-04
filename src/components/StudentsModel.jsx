import React from 'react';
import { useState } from 'react';
import {X} from 'lucide-react'; // Importing an 'X' icon from the lucide-react library for closing the modal


const StudentsModel = ({isOpen , onClose}) => {  
    // if(!isOpen == null)


    const [formData, setFormData] = useState({                                          // State to hold form data
    s_name:'',
    s_mother_name:'',
    s_father_name:'',                  
    s_phone_number:'',                                                      // Initializing state for form data using useState hook
    s_addmission_date:''
});

const handleChange =(e) => {                            // Event handler for input field changes
    const { name , value } = e.target;                              // Destructuring name and value from the event target (input field)
    setFormData ({                                          // Updating the formData state with new values
        ...formData,                        // Spread operator to copy existing formData properties
        [name] : value              // Dynamic key assignment using computed property names
    })
}

const handleSubmit = async (e) => {
    e.preventDefault();
    
    try{
        await itemServices.addData(formData);                               // Sending form data to the backend service to add a new student
        alert(" Data Added Successfully");
        onclose();                                  // Close the modal after successful submission
        window.location.reload(); // Here it will refresh whole page to see the new data 
    }catch(error){
        console.error(" Connection Failed , " , error);
        alert("Failed to add data. Please try again.");
    }
};


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
                        <form onSubmit={handleSubmit}> 
                            <div className='space-y-4 py-4'>
                                <input type="text" name='s_name' value={formData.s_name} onChange={handleChange} required/>
                                <input type="text" name='s_mother_name' value={formData.s_mother_name} onChange={handleChange} required/>
                            </div>
                            <div className='mt-6 flex gap-3'>
                                    <button type='button' onClick={onClose} > Cancel </button>
                                    <button type='submit' className='bg-indigo-600 text-white'> Save </button>
                                </div>
                        </form>
                    </p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default StudentsModel
