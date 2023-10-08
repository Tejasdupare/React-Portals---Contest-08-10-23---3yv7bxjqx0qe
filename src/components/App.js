import React ,{useState, useRef} from 'react'
import '../styles/App.css';
import PortalButton from './PortalButton.js';
import PortalTextArea from './PortalTextArea.js';

//complete the function 
const App = () => {
     const [inputValue, setInputValue]=useState('');
     const textAreaRef = useRef(null);

     const handleInputChange = (e) => {
      setInputValue(e.target.value);
     };
     const handleButtonClick = () => {
      if (textAreaRef.current){
        textAreaRef.current.value += inputValue;
        setInputValue('');
      }
     };



  return (
    
    <div id="main">
      <input id="input" value={inputValue} onChange={handleInputChange}></input><br/>
      <PortalButton buttonclick={handleButtonClick} /><br/>
      <PortalTextArea value={textAreaRef}/>
    </div>
  )
}


export default App;
