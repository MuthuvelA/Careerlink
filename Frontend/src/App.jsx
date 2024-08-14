import './App.css'
import Login from './login'
import Signup from './signup'
import Home from './home'
import PostJob from './postJob'
import ViewJob from './viewJobs'
import JobDetailCard from './jobDetailCard'
import { Route , Routes } from 'react-router-dom'
function App() {

  return (
    <>
   <Routes>

      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/postJob' element={<PostJob/>}></Route>
      <Route path="/viewJob" element={<ViewJob />}></Route>
      <Route path='/viewDetail/' element={<JobDetailCard/>}></Route>
      <Route path='/' element={<Home/>}></Route>
   </Routes>
      
    </>
  )
}

export default App
