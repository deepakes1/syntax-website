import './App.css'
import Navbar from './Parts/Navbar'

import { Routes, Route} from "react-router-dom";
import Eventsection from './Parts/Eventsection'
import Home from './components/Home';

function App() {
      
  return (
    <>
      <div className="h-[10vh] bg-[#40377D] flex justify-center items-center">
        <Navbar />
      </div>
      
      


      

      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/events' element = {<Eventsection/>}/>
      </Routes>

    </>
  )
}

export default App
