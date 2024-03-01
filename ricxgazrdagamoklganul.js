import './App.css';
import { useState } from 'react'

function App() {
 const [count, setcount] = useState(0)
  
  return<div className='App'>
    <button onClick={()=>{
      setcount(count + 1)
    }
    } >increase</button>
    <button onClick={ ()=>{
            setcount(count - 1)

    } } >decrease</button>
    <button onClick={() =>{
      setcount(0)
    }} >set to zero</button>
    {count}
    </div>
}

export default App;
