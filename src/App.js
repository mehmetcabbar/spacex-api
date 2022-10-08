import React from 'react';

// Redux is here 
import { Provider } from 'react-redux';
import { store } from './redux/reducers'

// Navigation is here
import Navigation from './components/navigation/Navigation';



function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  )
};


export default App;
