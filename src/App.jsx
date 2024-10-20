import './App.css'
import Navbar from './Parts/Navbar'

import { Routes, Route} from "react-router-dom";
import Eventsection from './Parts/Eventsection'
import Home from './components/Home';

import Coding from './components/Tech Events/Coding';

function App() {
      
  return (
    <>
      <div className="h-[10vh] bg-[#40377D] flex justify-center items-center">
        <Navbar />
      </div>
      
      


      

      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/events' element = {<Eventsection/>}/>
        <Route path='/events/tech/coding' element = {<Coding/>}/>
      </Routes>

    </>
  )
}

export default App
