import React from 'react';
import './css/App.css';
import './css/Progress.css'
import './css/Buttons.css'
import './css/SearchBar.css'
import ReelTalk from './components/ReelTalk';
import { UserFormContextProvider } from './context/UserFormContext';
import { QueryContextProvider } from './context/QueryContext';

/**
 * The main file that is ran.
 * This is where I would put routes as well if that was nessisary.
 * I may split up Context and Routes if either gets too big
 * @returns The app with all the Contexts attached
 */
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