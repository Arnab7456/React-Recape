import React from 'react';
import { Provider } from 'react-redux';
import store from './Utils/store';
import Body from './components/Body';
import Head from './components/Head';

function App() {
  return (
    <Provider store={store}>
      <div>
        <Head />
        <Body />
      </div>
    </Provider>
  );
}

export default App;

/*
  Head
  Body
    Sidebar
      menuItems
    mainContainer
      ButtonList
      VideoContainer
        VideoCard
*/
