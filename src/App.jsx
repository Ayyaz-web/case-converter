import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState("Hello Welcome to Case Converter Application");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  const handleUpperCase = () => {
    const upperCaseText = text.toUpperCase();
    setText(upperCaseText);
  }

  const handleLowerCase = () => {
    const lowerCaseText = text.toLowerCase();
    setText(lowerCaseText);
  }

  const handleClearText = () => {
    setText("");
  }

  const handleSpeech = () => {
    const utterance = new SpeechSynthesisUtterance(text);
    const voices = window.speechSynthesis.getVoices();
    utterance.voice = voices[0];
    window.speechSynthesis.speak(utterance);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
  }

  const removeSpaces = () => {
    const spacesRemove = text.replace(/\s+/g, ' ');
    setText(spacesRemove);
  }
  

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  }

  return (
    <>
      <div className={`flex justify-between w-full ${darkMode ? 'bg-black' : 'bg-green-900'}`}>
        <h1 className={`text-white text-2xl px-4 ${darkMode ? 'dark-text' : ''}`}>Text Converter</h1>
        <label className={`text-white text-xl px-4 ${darkMode ? 'dark-text' : ''}`}>
          <input
            className='mx-2'
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onChange={handleDarkModeToggle}
          />Dark Mode
        </label>
      </div>

      <div className={`mt-10 w-10/12 mx-28 border-2 p-3 rounded-lg ${darkMode ? 'dark-background' : ''}`}>
        <h1 className={`text-2xl mb-4 ${darkMode ? 'dark-text' : ''}`}>Enter the Text to Analyze Below: 👇 </h1>
        <textarea
          className={`w-full border-2 border-slate-500 ${darkMode ? 'dark-textarea' : ''}`}
          cols="20" rows="6"
          value={text}
          onChange={(e) => setText(e.target.value)}
        >Hello word</textarea>


        <div className={`flex justify-between mt-4 ${darkMode ? 'dark-text' : ''}`}>

          <div className='flex justify-between gap-4 mt-4'>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl"
              onClick={handleUpperCase}>Convert To UpperCase</button>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-xl"
              onClick={handleLowerCase}>Convert To LowerCase</button>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-xl"
              onClick={handleClearText}>Clear Text</button>
            <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-xl"
              onClick={handleSpeech}>Speech</button>
            <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-xl"
              onClick={handleCopy}>Copy Text</button>
            <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-xl"
              onClick={removeSpaces}>Remove Extra Spaces</button>
          </div>
        </div>


        <div className={`mt-4 ${darkMode ? 'dark-text' : ''}`}>
          <h1 className='mt-1'>Your Text Summary:</h1>
          <p className='mt-1'>{text.split(/\s+/).length} Words and {text.length} Characters</p>
          <p className='mt-1'>It takes {Math.ceil(text.length / 5)} seconds to read it</p>
          <h1 className='mt-1'>Preview:</h1>
          <p className='mt-1'>{text}</p>

        </div>
      </div>
    </>
  )
}

export default App;
