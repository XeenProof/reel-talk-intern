import React from 'react';
import './css/App.css';
import './css/Progress.css'
import './css/Buttons.css'
import './css/SearchBar.css'
import ReelTalk from './components/ReelTalk';
import { UserFormContextProvider } from './context/UserFormContext';
import { QueryContextProvider } from './context/QueryContext';

function App() {
  return (
    <QueryContextProvider>
      <UserFormContextProvider>
        <div id='main'>
          <ReelTalk/>
        </div>
      </UserFormContextProvider>
    </QueryContextProvider>
  );
}

export default App;