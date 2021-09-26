import React from 'react';
import './App.css';
import MyComponent from './components/MyComponent';
import SearchBox from './components/SearchBox';
import GroupedSearchBox from './components/GroupedSearchBox';
import PureSelect from './components/PureSelect';

function App() {
  return (
    <div>
      <PureSelect />
      <SearchBox />
      <GroupedSearchBox />
      <MyComponent />
    </div>
  );
}

export default App;
