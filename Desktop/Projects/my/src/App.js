
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';

function App() {
  return (
    <div>
      <Navbar title="TextDose" aboutText="About Us" />
      <div className="container">
        <TextArea textarea="Enter your text" />
      </div>
      {/* <About /> */}
    </div>
  );
}


export default App;
