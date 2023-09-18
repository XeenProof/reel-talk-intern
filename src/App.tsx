import React from 'react';
import './css/App.css';
import './css/ProgressBarV2.css'
import './css/ProgressBarV3.css'
import './css/Buttons.css'
import ReelTalk from './components/ReelTalk';
import { UserFormContextProvider } from './context/UserForm';

function App() {
  return (
    <UserFormContextProvider>
      <div id='main'>
        <ReelTalk/>
      </div>
    </UserFormContextProvider>

  );
}

export default App;