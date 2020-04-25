import React, { useState } from 'react';

import Binding from './components/Binding';
import Event from './components/Event';
import SlotSample, {
  SlotSampleHeader,
  SlotSampleFooter,
  SlotSampleMain,
} from './components/SlotSample';

import logo from './logo.svg';
import './App.css';

function App() {
  const spa = ['React', 'Vuejs', 'Angular'];

  const [message, changeMessage] = useState('Binding message');
  const [showC1binding, flitC1binding] = useState(true);

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Welcome to Your React App</h1>

      <ul>
        {spa.map((item, key) => (
          <li key={key}>
            { item }
          </li>
        ))}
      </ul>
      <button
        onClick={event => changeMessage(`${message}.`)}
      >
        Change Message
      </button>
      <button
        onClick={event => flitC1binding(!showC1binding)}
      >
        Flit C1binding
      </button>

      {showC1binding ?
        <Binding
          message={message}
        />
        :
        <p>
          Without C1Binding
        </p>
      }

      <Event
        newMessage={message_arg => changeMessage(message_arg)}
      />

      <SlotSample>
        {generated => (
          <React.Fragment>
            <SlotSampleHeader>
              <h1>Here might be a page title</h1>
            </SlotSampleHeader>
            <SlotSampleMain>
              <p>A paragraph for the main content.</p>
              <p>And another one.</p>
            </SlotSampleMain>
          </React.Fragment>
        )}
      </SlotSample>
    </div>
  );
}

export default App;
