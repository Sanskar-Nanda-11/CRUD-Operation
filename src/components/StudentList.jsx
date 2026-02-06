import React from 'react';
import { useState } from 'react';
// import onEdit from '../App.jsx';
// import onDelete from '../App.jsx';
import App from '../App';
import { Edit , Trash2 , User , Eye } from 'lucide-react';

  const StudentList = ({students ,onDelete , onEdit , onview}) => {

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
              <tr key={students.id} className='hover:bg-slate-50 transition-colors group'>        
                <td className='px-6 py-4'>
                  {/* ' Hover parent and transition-colors makes it smooth lite ' -: this is for line no 21 */}
                  {/* ' Child color changes due to hover happend for applying group on parent ' -: this is for line no 25 */}
                <div className='flex items-center gap-3'>                          
                  <div className='h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 '>
                    <User size={20}/> {/* an user profile icon , with the size in pixle */}
                  </div>
                  <span className='font-medium text-slate-700'> {students.s_name}</span>
                </div>
              </td>
              <td className='px-6 py-4 text-slate-500 font-mono text-sm'>
                {students.id}
                {/* Displaying the unique student id from database */}
                </td>   
              <td className='px-6 px-4 text-right'>
                <div className='flex justify-end gap-3'>
                  <button className='text-slate-400 hover:text-indigo-600 transition-colors' onClick={()=> onEdit(students)}>
                    <Edit size={18} /> {/* an edit icon , with the size in pixle */}
                  </button>
                  <button onClick={()=> onDelete(students.id)} className='text-slate-600 hover:text-slate-600 transition-colors'>
                    <Trash2 size={20}/>
                  </button>
                  <button onClick={()=> onview(students)} className='text-slate-400 hover:text-slate-600 transition-colors'>
                    <Eye size={18}/>
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
