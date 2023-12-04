import React from 'react'
import Navigation from './src/navigation'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistedStore } from './src/redux/store';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>

      <Provider store={store}>
        <PersistGate loading={null} persistor={persistedStore}>
          <Navigation />
        </PersistGate>
      </Provider>
    </GestureHandlerRootView>
  )
}

export default App