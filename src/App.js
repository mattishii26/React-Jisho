import React from 'react';
import NavComponent from './Component/navComponent';
import SearchComponent from './Component/searchPageComponent';

function App() {
  return (
    <div className="App">
      <NavComponent title="React Jisho"></NavComponent>
      <SearchComponent></SearchComponent>
    </div>
  );
}

export default App;
