import React from 'react';
import './App.css';
import MyComponent from './components/MyComponent';
import SearchBox from './components/SearchBox';
import GroupedSearchBox from './components/GroupedSearchBox';

function App() {
  return (
    <div>
      <SearchBox />
      <GroupedSearchBox />
      <MyComponent />
    </div>
  );
}

export default App;
