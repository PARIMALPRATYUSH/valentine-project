import React, { useState } from 'react';
import './App.css';

const phrases = [
  "No",
  "Are you sure?",
  "Pleaseeeee",
  "Ok, imma cry",
  "pls pls pls"
]

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount*20 +16
  const yeButtonRadius = yesButtonSize*3/16

  function handleNoClick() {
    setNoCount(noCount + 1)
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length -1)]
  }

  const answerYes = () => {
    setYesPressed(true);
  };

  return (
    <div className="App">
      {!yesPressed ? (
        <>
          
          <img src="https://tenor.com/view/bear-love-heart-jumping-jump-gif-17246531" alt="Custom GIF" />
          <div>Will you be my Valentine?</div>
          <div className='buttons'>
            <button 
            className='yes'
            style={{fontSize: yesButtonSize, borderRadius: yeButtonRadius}}
            onClick={answerYes}
            >Yes</button>
            <button 
            className='no'
            onClick={handleNoClick}>{getNoButtonText()}</button>
          </div>
        </>
      ):
       (
          <>
          <img src="path/to/your-custom-gif.gif" alt="Custom GIF" />
          <div>Yay!!!</div>
          </>
      )}
    </div>
  );
}

export default App;
