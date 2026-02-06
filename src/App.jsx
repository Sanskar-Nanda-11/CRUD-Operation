import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar.jsx'
// import './App.css'
import StudentList from './components/StudentList.jsx'
import { itemService } from './services/itemService.jsx'
import StudentsModel from './components/StudentsModel.jsx'

function App() {

  const [selectedStudent, setSelectedStudent] = useState(null); {/* State to hold the currently selected student, initialized to null  */ }
  const [IsModelopen, setIsModelopen] = useState(false);        // State to control the visibility of the modal dialog, initialized to false (modal is closed by default)
  const [ViewOnly, setViewOnly] = useState(false);  // State to determine if the modal is in view-only mode, initialized to false

  // const openEditModel = (student) => {
  //   setSelectedStudent(student);
  //   setIsModelopen(true);
  // }

  const handleEdit = (Student) => {
    console.log(" App received student", Student);
    setSelectedStudent(Student);
    setIsModelopen(true);
  }


  const handleClose = () => {                 // Handler function to close the modal dialog and reset the selected student
    setSelectedStudent(null);         
    setIsModelopen(false);            // Close the modal dialog and reset the selected student to null when the close handler is called
    setViewOnly(false);               {/* Reset the selected student and close the modal when the close handler is called  */ }
  }

  const handleview = (students) => {
    setSelectedStudent(students);
    setViewOnly(true);
    setIsModelopen(true);
  }


  const OpenModel = () => {
    console.log(" Open Model Function Called ");
    setIsModelopen(true);  // Open the modal dialog
  }

  const CloseModel = () => {
    setIsModelopen(false);  // Close the modal dialog
  }

  const [students, setStudents] = useState([]); {/* initial state is an empty array but will hold the list of students later on  */ }
  useEffect(() => {

    // return () => {
    loadStudents();
    // }
  }, [])

  const loadStudents = async () => {
    try {
      const response = await itemService.getAllData(); {/* Fetch all students from the backend service */ }
      setStudents(response.data); {/* Update the state with the fetched student data */ }
    } catch (error) {
      console.error("Failed To Faitch Students", error);
    }
  };

  const handledelete = async (id) => {
    if (window.confirm("Delete this Student 🤔😢 ?")) {
      {/* Confirmation dialog before deletion */ }
      await itemService.deleteData(id);
      loadStudents();     // Refresh the list after deletion
    }
  }
  return (
    <>
      <div className='min-h-screen bg-slate-50'>
        <Navbar onAddMember={OpenModel} />
        <main className='container mx-auto px-6 px-8'>
          <StudentList students={students} onDelete={handledelete} onEdit={handleEdit} onview={handleview}/>           {/* Pass the student data and delete handler to the StudentList component  */}
        </main>
        <StudentsModel isOpen={IsModelopen} onClose={CloseModel} selectedStudent={selectedStudent} />   {/* Modal dialog for adding a new student  */}
      </div>
    </>
  );
}

export default App
