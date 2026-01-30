import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar.jsx'
import './App.css'
import StudentList from './components/StudentList.jsx'
import { itemService } from './services/itemService.jsx'

function App() {

  const[students , setStudents] = useState([]);
  useEffect(() => {

    return () => {
      loadStudents();
    }
  }, [])
  
  const loadStudents = async () => {
    try {
      const response = await itemService.getAllData();
      setStudents(response.data);
    } catch (error) {
      console.error("Failed To Faitch Students" , error);
    }
  };

  const handledelete = async (id) =>{
    if (window.confirm("Delete this Student ?")) {
      await itemService.deleteData(id);
      loadStudents();     // Refresh the list after deletion
    }
  }
  return (
    <>
      <div className='min-h-screen bg-slate-50'>
        <Navbar />
        <main className='container mx-auto px-6 px-8'>
      <StudentList students={students} onDelete={handledelete} />
        </main>
      </div>
    </>
  );
}

export default App
