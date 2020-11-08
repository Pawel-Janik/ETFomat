import React from 'react';
import './App.css';

import { EtfCard } from './components/EtfCard';
import { useApi } from './hooks/useApi';

function App() {
  const chartData = useApi();
  return (
    <div className="App">
      <EtfCard chartData={chartData} />
    </div>
  );
}

export default App;
