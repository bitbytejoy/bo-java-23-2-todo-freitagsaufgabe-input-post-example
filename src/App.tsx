import {useState} from 'react'
import './App.css'
import axios from "axios";

function App() {
  const [description, setDescription] = useState("")

  return (
      <div>
          <input value={description} onChange={e => setDescription(e.target.value)}/>
          <button onClick={() => {
              axios({
                  method: 'post',
                  url: '/api/todo',
                  data: {
                      id: "1",
                      description: description,
                      status: "OPEN"
                  }
              });
          }}>ADD</button>
      </div>
  )
}

export default App
