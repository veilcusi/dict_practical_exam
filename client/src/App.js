import './App.css';
import React, { useState } from 'react';
import Axios from 'axios';

function App() {

  
  const [parent, setParent] = useState("");
  const [childList, setchildList] = useState([]);

  const submitParam = () => {
    var params = {params: { id: parent}};
    Axios.get("http://localhost:3001/api/getParams",params).then((response) => {
      console.log(response);
      setchildList(response.data);
    });
  }

  return (
    <div className="App">
      <h1>Practical Exam</h1>
      <div>
        <label>Parent: </label>
        <select name="parent" onChange={(e) => { setParent(e.target.value); }}>
          <option value="0">Select an option</option>
          <option value="1">Fruits</option>
          <option value="2">Vegetables</option>
        </select>
      </div>

      <button onClick={submitParam}>Submit</button>

      <div>
        <label>Child: </label>
        <select>
          {childList.map((val) => {
              return <option key="{val}">{val}</option>
          })}
        </select>
      </div>
    </div>
  );
}

export default App;
