import React, { useState } from 'react';
import './App.css';
import fire from './fireBase';
import BoardContainer from './Containers/BoardContainer'


function App() {

  const [text, setText] = useState('');

  // const handleText = e => {
  //   setText(
  //     e.target.value
  //   )
  // }

  // const handleSubmit = e => {
  //   // e.preventDefault()
  //   let messageRef = fire.database().ref('message')
  //   messageRef.push(text);
  //   setText('')
  // }
    
    

  return (
    <div className="App">
      {/* <input type="text" onChange={handleText} id="inputText" />
      <br/>
      <button onClick={handleSubmit}>save</button> */}
      <BoardContainer />
    </div>
  );
}

export default App;
