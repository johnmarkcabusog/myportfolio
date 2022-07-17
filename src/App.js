import './App.css';
import AboutMe from './pages/AboutMe';
import CreativeWorks from './pages/CreativeWorks';
import Experiences from './pages/Experiences';
import Footer from './pages/Footer';
import Home from './pages/Home';
import Menu from './pages/Menus';
import SoftwareCreations from './pages/SoftwareCreations';

function App() {
  return (
    <div>
        <Home/>
        <AboutMe/>
        <Experiences/>
        <SoftwareCreations/>
        <CreativeWorks/>
        <Footer/> 
        <Menu/>
    </div>
  );
}

export default App;
