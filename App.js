import React from 'react'
import Navigation from './src/navigation'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistedStore } from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistedStore}>
        <Navigation />
      </PersistGate>
    </Provider>
  )
}

export default App