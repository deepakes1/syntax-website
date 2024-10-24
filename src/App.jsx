import './App.css'
import Navbar from './Parts/Navbar'

import { Routes, Route} from "react-router-dom";
import Eventsection from './Parts/Eventsection'
import Home from './components/Home';

import Coding from './components/Tech Events/Coding';
import TechnicalQuiz from './components/Tech Events/TechnicalQuiz';
import PaperPresentation from './components/Tech Events/PaperPresentation';
import Sql from './components/Tech Events/Sql';
import TechnicalGame from './components/Tech Events/TechnicalGame';
import Videography from './components/Non Tech events/Videography';
import PosterDesign from './components/Non Tech events/PosterDesign';
import Connection from './components/Non Tech events/Connection';
import MarbleShowDown from './components/Non Tech events/MarbleShowDown';

import Faq from './Parts/Faq';
import Memecreation from './components/Non Tech events/Memecreation';
import About from './Parts/About';
import Contact from './Parts/Contact';
import Hackathon from './Parts/Hackathon';
import Timer2 from './Parts/Timer2';


import TechList from './Parts/TechList';
function App() {
      
  return (
    <>
      <div className="h-[10vh] bg-black flex justify-center items-center fixed top-0 w-full z-50">
        <Navbar />
      </div>

    {/* <div className="">

        <Timer2/>
    </div>
       */}

      

      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/events' element = {<Eventsection/>}/>
        <Route path='/events/tech/coding' element = {<Coding/>}/>
        <Route path='/events/tech/Tecnical-Quiz' element = {<TechnicalQuiz/>}/>
        <Route path='/events/tech/Paper-Presentation' element = {<PaperPresentation/>}/>
        <Route path='/events/tech/Mystery-Sql' element = {<Sql/>}/>
        <Route path='/events/tech/Technical-Game' element = {<TechnicalGame/>}/>
        <Route path='/events/non-tech/Videography' element = {<Videography/>}/>
        <Route path='/events/non-tech/PosterDesign' element = {<PosterDesign/>}/>
        <Route path='/events/non-tech/Connection' element = {<Connection/>}/>
        <Route path='/events/non-tech/MarbleShowDown' element = {<MarbleShowDown/>}/>
        <Route path='/contact' element = {<Contact/>}/>
        <Route path='/About' element = {<About/>}/>
        <Route path='/Hackathon' element = {<Hackathon/>}/>
        <Route path='/Faq' element = {<Faq/>}/>
        <Route path='/events/non-tech/Memecreation' element = {<Memecreation/>}/>
        <Route path='/events/tech' element = {<TechList/>}/>
      </Routes>

    </>
  )
}

export default App
