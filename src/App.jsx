import './App.css'
import Navbar from './Parts/Navbar'

import { Routes, Route} from "react-router-dom";
import Eventsection from './Parts/Eventsection'
import Home from './components/Home';

import Coding from './components/Tech Events/Coding';
import TechnicalQuiz from './components/Tech Events/TechnicalQuiz';
import PaperPresentation from './components/Tech Events/PaperPresentation';
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
        <Route path='/events/tech/Tecnical-Quiz' element = {<TechnicalQuiz/>}/>
        <Route path='/events/tech/Paper-Presentation' element = {<PaperPresentation/>}/>

      </Routes>

    </>
  )
}

export default App
