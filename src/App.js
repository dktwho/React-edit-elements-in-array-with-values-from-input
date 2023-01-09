import { useState } from 'react';
import './App.css';

function App() {

  const [notes, setNotes] = useState(['a','b','c'])
  const [editNum, setEditNum] = useState(null)

  const result = notes.map((note, index) => {
    return <p key={index}>{note} <button onClick={() => setEditNum(index)}>change</button></p>
  })

  function changeHandler(e) {
    setNotes([...notes.slice(0, editNum), e.target.value, ...notes.slice(editNum + 1)])
  }

  function clearInput() {
    setEditNum('')
  }
 

  return (
    <div className="App">
      <ul>{result}</ul>
      <input value={editNum ? notes[editNum] : ''}  onChange={changeHandler} onBlur={clearInput} />

    </div>
  );
}

export default App;
