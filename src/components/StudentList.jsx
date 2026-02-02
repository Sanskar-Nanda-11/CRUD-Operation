import React from 'react';
import { useState } from 'react';
import { Edit , Trash2 , User } from 'lucide-react';

  const StudentList = ({students , onDelete }) => {

    return (
      <>
      <div className='bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden'>
        <table className='w-full text-left'>
          <thead className='bg-slate-50 border-b border-slate-200'>
            <tr>
              <th className='px-6 py-4 text-sm font-semibold text-slate-600'> Student Name </th>
              <th className='px-6 py-4 text-sm font-semibold text-slate-600'> ID </th>
              <th className='px-6 py-4 text-sm font-semibold text-slate-600 text-right'> Actions</th>
            </tr>
          </thead>
          {/* divide-y is a Tailwind CSS utility used to add horizontal dividers between child elements (top & bottom borders). */}
          <tbody className='divide-y divide-slate-100'>
            {students.map((students)=> (
              <tr key={students.id} className='hover:bg-slate-50 transition-colors group'>   {/* Hover parent */}     {/* transition-colors makes it smooth lite */}
                <td className='px-6 py-4'>
                <div className='flex items-center gap-3'>                          {/* Child color changes due to hover happend for applying group on parent  */}
                  <div className='h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 '>
                    <User size={20}/> {/* an user profile icon , with the size in pixle */}
                  </div>
                  <span className=' font-medium text-slate-700 '> {students.s_name}</span>
                </div>
              </td>
              <td className='px-6 py-4 text-slate-500 font-mono text-sm'>{students.id}</td>
              <td className='px-6 px-4 text-right'>
                <div className='flex justify-end gap-3'>
                  <button className='text-slate-400 hover:text-indigo-600 transition-colors'>
                    <Edit size={18} /> {/* an edit icon , with the size in pixle */}
                  </button>
                  <button onClick={()=> onDelete(students.id)} className='text-slate-600 hover:text-slate-600 transition-colors'>
                    <Trash2 size={20}/>
                  </button>
                </div>
              </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </>
    );
  }



export default StudentList
