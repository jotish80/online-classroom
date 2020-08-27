import React from 'react';
 
import './App.css';
import { useState } from 'react';
 
import fakeData from './fakeData';


function App() {
  console.log(fakeData);
   const[courses, setCourses] = useState([]);
  
// useEffect((){

// },[])

  return (
    <div className="App">
      <h2>course loaded:{courses.length}</h2>
      
      <header className="App-header">
            <h1>Online Classroom</h1>
      </header>
    </div>
  );
}

export default App;
