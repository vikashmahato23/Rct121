import logo from './logo.svg';
import './App.css';
import { Nav } from './components/Nav';
import { Github } from './components/Github Repositories';
import { useCallback,useState } from 'react';

function App() {
  const[value,setValue]=useState("react")

  const callback = useCallback((value) => {
    setValue(value);
  },[value])

  return (
    <div className="App">
     
       <Nav prop={callback}/>
       <p>{value}</p>
       <Github text={value}/>
    </div>
  );
}

export default App;
