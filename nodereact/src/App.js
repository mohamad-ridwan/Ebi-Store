import React from 'react';
import logo from './logo.svg';
import './App.css';
// Import to FILE Directory
import ContainerW from './components/Container/ContainerW';
// END Import to FILE Directory

// Import CSS Bootstrap 4.0.0
import '../src/bootstrap-4.0.0/dist/css/bootstrap.css'
// END Import CSS Bootstrap 4.0.0


function App() {
  return (
    <div className="App">
      {/* CONTAINER */}
      <ContainerW />
      {/* END CONTAINER */}
    </div>
  );
}

export default App;
