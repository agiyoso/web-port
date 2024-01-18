import './App.css';

import Navbar from './components/navbar/navbar';
// import Homepage from './components/homepage/homepage';
// import Projectpage from './components/projectpage/projectpage';
// import Skillpage from './components/skillpage/skillpage';
// import Contactpage from './components/contactpage/contactpage';
import Content from './components/content';

function App() {
  return (
    <div className='App' style={{overflowX:"hidden", fontFamily:"Source Code Pro"}}>
      <div className='sticky-top'>
        <Navbar/>
      </div>
      <div className='bg-warna-satu'>
        <Content/>
      </div>
</div>

  );
}

export default App;
