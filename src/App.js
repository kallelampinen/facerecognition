import React from 'react';
import Navigation from './Components/Navigation/Navigation'
import './App.css';
import Logo from './Components/Logo/Logo'
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm.js'
import Rank from './Components/Rank/Rank.js'

function App() {
  return (
    <div className="App">
      
      <Navigation/>
      <Logo/>
      <ImageLinkForm/>
      <Rank/>
      {/* <FaceRecognition/>} */}
    </div>
  );
}

export default App;
