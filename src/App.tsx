/// <reference types="../global" />

import React,  { useState } from 'react';
import './App.css';
import SearchBox from './components/SearchBox';
import Viewer from './components/Viewer';

function App() {
  const [data, setData] = useState<QQUser>({ qq: '', name: '', qlogo: ''});
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [fetching, setFetching] = useState(false);
  const updateData = (data: any) => {
    setData(data);
    setErrorMsg('');
  }
  return (
    <div className="App">
      <h1>QQ号查询</h1>
      <SearchBox setData={updateData} setErrorMsg={setErrorMsg} setFetching={setFetching} />
      <Viewer data={data} fetching={fetching} errorMsg={errorMsg} />
    </div>
  );
}

export default App;
