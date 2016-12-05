import React from 'react';
import Greeting from './greeting/greeting_container.js';

const App = ({children}) => (
  <div>
    <Greeting />
    {children}
  </div>
);

export default App;
