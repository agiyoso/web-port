import './App.css';

import Navbar from './components/navbar/navbar';
import Homepage from './components/homepage/homepage';
import Projectpage from './components/projectpage/projectpage';
import Skillpage from './components/skillpage/skillpage';
import Contactpage from './components/contactpage/contactpage';

function App() {
  return (
    <div className="App" style={{overflowX:"hidden"}}>

      <Navbar/>

      <Homepage/>

      <Projectpage/>

      <Skillpage/>

      <Contactpage/>

    </div>
  );
}

export default App;
