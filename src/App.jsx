import React from 'react';
import { render } from 'react-dom';
import ChatUI from './ChatUI.jsx';
import Store from './Store.jsx';

render(
  //wrap ChatUI with Store, to get access to current state
  <Store>
    <ChatUI />
  </Store>,
  document.getElementById('app')
);
