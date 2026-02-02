import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar.jsx'
// import './App.css'
import StudentList from './components/StudentList.jsx'
import { itemService } from './services/itemService.jsx'
import StudentsModel from './components/StudentsModel.jsx'

function App() {

  const [IsModelopen, setIsModelopen] = useState(false);

  const OpenModel =() =>{
    setIsModelopen(true);  // Open the modal dialog
  }

  const CloseModel =() =>{
    setIsModelopen(false);  // Close the modal dialog
  }

  const[students , setStudents] = useState([]);  {/* initial state is an empty array but will hold the list of students later on  */}
  useEffect(() => {

    return () => {
      loadStudents();
    }
  }, [])
  
  const loadStudents = async () => {
    try {
      const response = await itemService.getAllData();    {/* Fetch all students from the backend service */}
      setStudents(response.data);                           {/* Update the state with the fetched student data */}
    } catch (error) {
      console.error("Failed To Faitch Students" , error);
    }
  };

  const handledelete = async (id) =>{
    if (window.confirm("Delete this Student ?")) {          /* Confirmation dialog before deletion */
      await itemService.deleteData(id);
      loadStudents();     // Refresh the list after deletion
    }
  }
  return (
    <>
      <div className='min-h-screen bg-slate-50'>
        <Navbar onAddMember={OpenModel} />
        <main className='container mx-auto px-6 px-8'>
      <StudentList students={students} onDelete={handledelete} />           {/* Pass the student data and delete handler to the StudentList component  */}
        </main>
        <StudentsModel isOpen={IsModelopen} onClose={CloseModel} />   {/* Modal dialog for adding a new student  */}
      </div>
    </>
  );
}

export default App
