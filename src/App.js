import logo from './logo.svg';
import './App.css';
import Bgvideo from './Components/Bgvideo';
import NavBar from './Components/NavBar';
import { Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import InscriptionPage from './Components/InscriptionPage';
import ConnexionPage from './Pages/ConnexionPage';



function App() {
  return (
    <div className="App">
      
     

      <Routes>
      <Route path='/' element={ <Home/>} />
      <Route path='/services' element={ <Services/>} />
      <Route path='/Contact' element={ <Contact/>} />
      <Route path='/inscription' element={ <Contact/>} />
      <Route path='/signUp' element={ <InscriptionPage/>} />
      <Route path='/login' element={ <ConnexionPage/>} />
      </Routes>
        
     
    </div>
  );
}

export default App;
