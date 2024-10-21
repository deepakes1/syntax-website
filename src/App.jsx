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
import Videography from './components/Non Tech events/Videography';
import PosterDesign from './components/Non Tech events/PosterDesign';
import Connection from './components/Non Tech events/Connection';
import MarbleShowDown from './components/Non Tech events/MarbleShowDown';
import Flipbottle from './components/Non Tech events/Flipbottle';
function App() {
      
  return (
    <>
      <div className="h-[10vh] bg-black flex justify-center items-center">
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
        <Route path='/events/non-tech/Videography' element = {<Videography/>}/>
        <Route path='/events/non-tech/PosterDesign' element = {<PosterDesign/>}/>
        <Route path='/events/non-tech/Connection' element = {<Connection/>}/>
        <Route path='/events/non-tech/MarbleShowDown' element = {<MarbleShowDown/>}/>
        <Route path='/events/non-tech/Flipbottle' element = {<Flipbottle/>}/>

      </Routes>

    </>
  )
}

export default App
