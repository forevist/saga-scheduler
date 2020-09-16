import React from 'react';
import { SagaScheduler } from './components/main';

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import './App.css';

function App() {
  return (
    <div className="App">
      <SagaScheduler/>
    </div>
  );
}

export default App;
