import './App.css'
import Navbar from './Parts/Navbar'

import { Routes, Route} from "react-router-dom";
import Eventsection from './Parts/Eventsection'
import Home from './components/Home';

import Coding from './components/Tech Events/Coding';
import TechnicalQuiz from './components/Tech Events/TechnicalQuiz';
import PaperPresentation from './components/Tech Events/PaperPresentation';
import ProjectExpo from './components/Tech Events/ProjectExpo';
import Sql from './components/Tech Events/Sql';
import TechnicalGame from './components/Tech Events/TechnicalGame';
import Photography from './components/Non Tech events/Photography';

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
        <Route path='/events/tech/Project-Expo' element = {<ProjectExpo/>}/>
        <Route path='/events/tech/Mystery-Sql' element = {<Sql/>}/>
        <Route path='/events/tech/Technical-Game' element = {<TechnicalGame/>}/>
        <Route path='/events/non-tech/Photography' element = {<Photography/>}/>
      </Routes>

    </>
  )
}

export default App
