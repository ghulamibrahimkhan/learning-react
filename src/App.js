import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    {/* <Navbar/> */}
      <Navbar title="Text Utils" about="About us" contact="Contact" />
      <TextForm heading="Enter the text to analyze" label="Enter your text below"/>
      </>
  );
}

export default App;
