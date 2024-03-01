import './App.css';
// sawkisi age aris 0.shevkmenit inceraseage funqcia 
// romelicizrdeba 1it.da gadavecit onclickit.martivia.
// usestate.kide ikneba magalitebikai ramea.
import { useState } from 'react'
function App() {
  const [age, setAge] = useState(0)
  
  const increaseAge = () =>{
    setAge(age + 1)
  };
  return<div className='App'>
    {age} 
    <button onClick={increaseAge} >increase age</button> 
    </div>
}

export default App;
