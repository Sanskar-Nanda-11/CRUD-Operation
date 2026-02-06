import React, { useEffect } from 'react';
import { useState } from 'react';
import selectedUser from '../App.jsx';
import itemService from '../services/itemService'; // Importing a service to handle backend operations related to items (students)
import { X } from 'lucide-react'; // Importing an 'X' icon from the lucide-react library for closing the modal


const StudentsModel = ({ isOpen, onClose, selectedStudent, ViewOnly
}) => {           // A functional component that represents a modal dialog for adding or editing student information. It receives three props: isOpen (a boolean to control the visibility of the modal), onClose (a function to close the modal), and selectedStudent (an object representing the currently selected student for editing, if any).
    // if(!isOpen == null)


    console.log(" Model received as ", isOpen);

    const [formData, setFormData] = useState({                                          // State to hold form data
        s_name: '',
        s_mother_name: '',
        s_father_name: '',
        s_phone_number: '',                                                      // Initializing state for form data using useState hook
        s_addmission_date: ''
    });

    useEffect(() => {              // Effect hook to update form data when selectedStudent or isOpen changes
        if (selectedStudent && isOpen) {
            setFormData(selectedStudent);
        } else {
            setFormData({ s_name: "", s_father_name: "", s_mother_name: "", s_phone_number: "", s_addmission_date: "" });
        }
    }, [selectedStudent, isOpen]);

    const handleChange = (e) => {                            // Event handler for input field changes
        const { name, value } = e.target;    // Destructuring name and value from the event target (input field)

        // if(name === "s_phone_number"){
        //     const pure_value = value.replace(/[^\d+]/g, " ");

        //     if (!pure_value.startsWith("+91") && pure_value.length > 0){
        //         return ;
        //     }
        //     if(pure_value.length > 10) return; 
        //     setFormData ({...formData , [name] : pure_value});            
        // }else{
        //     setFormData({...formData , [name] : value});
        // }


        setFormData({                                          // Updating the formData state with new values
            ...formData,                        // Spread operator to copy existing formData properties
            [e.target.name]: e.target.value              // Dynamic key assignment using computed property names
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (selectedStudent && selectedStudent.id) {
                await itemService.updateData(selectedStudent.id, formData);
                alert(" User Updated Successfully ")                            // Sending form data to the backend service to update a new student
            } else {
                await itemService.createNewData(formData);                               //  Sending form data to the backend service to add a new student
                alert(" User Created Successfully 🎉");
            }
            onClose();                                  // Close the modal after successful submission
            window.location.reload(); // Here it will refresh whole page to see the new data 

        } catch (error) {
            console.error(" Connection Failed 😢 ", error);
            alert("Failed to add or update data. Please try again.");
        }
    };


    if (!isOpen) return null;
    return (
        <>
            <div className='fixed inset-0 z-9999 flex items-center justify-center p-4'>
                <div className='absolute inset-0 bg-slate-900/60 backdrop-blur-sm' onClick={onClose}></div>
                <div className='relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden transform transition-all'>
                    <div className='p-6'>
                        {/* <div className='flex justify-between items-center mb-6'> */}
                        <h2 className='text-xl font-bold text-slate-800 mb-6 inline'> { ViewOnly ? "Students Details" : " Add Users Details Here" }</h2>
                        {/* <h2 className='text-xl font-bold text-slate-800 md-6'>
                            {ViewOnly ? " Student Details "}
                        </h2> */}
                        <span>
                            <button className='text-slate-400 hover:text-slate-600 float-right transition-colors' onClick={onClose}>
                        <X size={24}/>
                    </button>
                        </span>
                        {/* </div> */}
                        <form onSubmit={handleSubmit} className='space-y-4'>
                            <p className='text-slate-500 text-sm'>Enter the details bellow to add your data on EduFlow system.</p>
                            <div >
                                <label htmlFor="nameoftheuser" className='block text-sm font-medium text-slate-700 mb-1'> User's Name </label>
                                <input id="nameoftheuser" type="text" name='s_name' value={formData.s_name} readOnly={ViewOnly} onChange={handleChange} placeholder='e.g. Ashok Tripathi ' className={`w-full px-4 py-2 border border-slate-200 rounded-lg ${ViewOnly ? 'bg-slate-500' : 'bg-white' }`}required />
                            </div>
                            <div >
                                <label htmlFor="mothersoftheuser" className='block text-sm font-medium text-slate-700 mb-1'> User's  Mother's Name </label>
                                <input id="mothersoftheuser" type="text" name='s_mother_name' value={formData.s_mother_name} onChange={handleChange} placeholder='e.g. Tulasi Tripathi ' className={`w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 ${ViewOnly ? 'bg-slate-500' : 'bg-white'}`} required />
                            </div>
                            <div >
                                <label htmlFor="fathersoftheuser" className='block text-sm font-medium text-slate-700 mb-1'> User's  Father's Name </label>
                                <input id="fathersoftheuser" type="text" name='s_father_name' value={formData.s_father_name} onChange={handleChange} placeholder='e.g. Rama Krushna Tripathi ' className={`w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 ${ViewOnly ? 'bg-slate-500' : 'bg-white'}`} required />
                            </div>
                            <div >
                                <label htmlFor="phonenumbersoftheuser" className='block text-sm font-medium text-slate-700 mb-1'> User's Phone Number </label>
                                <input id="phonenumbersoftheuser" type="number" name='s_phone_number' value={formData.s_phone_number} onChange={handleChange} placeholder='e.g. 9876543210 ' className={`w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 ${ViewOnly ? 'bg-slate-500' : 'bg-white'}`} required minLength={0} maxLength={10} pattern="[0-9]*" />
                            </div>
                            <div >
                                <label htmlFor="addmissiondateoftheuser" className='block text-sm font-medium text-slate-700 mb-1'> User's Addmission Date </label>
                                <input id="addmissiondateoftheuser" type="date" name='s_addmission_date' value={formData.s_addmission_date} onChange={handleChange} placeholder='e.g. Ashok Tripathi ' className={`w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 ${ViewOnly ? 'bg-slate-500' : 'bg-white'}`} required />
                            </div>
                            <div className='flex gap-3 mt-8'>
                                <button type='button' onClick={onClose} className='flex-1 px-4 py-2 border rounded-lg hover:bg-slate-50 transition-colors '> Cancel / Close </button>
                                {!ViewOnly && (
                                    <button type="submit" className='flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg'>
                                        Save User
                                    </button>
                                )}
                                {/* <input type='text'
                                    // className='flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 shadow-md transition-all' 
                                    name='s_name' value={formData.s_name} onChange={handleChange} readonly={ViewOnly} // This will make the input field read-only when ViewOnly is true, preventing any changes to the user's name in view mode. 
                                    className={ViewOnly ? "bg-slate-50 cursor-not-allowed" : ""}
                                />
                                {!ViewOnly && (
                                    <button>
                                        Save User
                                    </button> */}
                                {/* )} */}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StudentsModel
