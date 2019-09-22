import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import Router from './Router'; 

class App extends Component {
  componentWillMount() {
    const firebaseConfig = {
      apiKey: 'AIzaSyBaWcDA-gp7tqjDuEdTwssBl3MhUeQ19pY',
      authDomain: 'manager-83f0d.firebaseapp.com',
      databaseURL: 'https://manager-83f0d.firebaseio.com',
      projectId: 'manager-83f0d',
      storageBucket: '',
      messagingSenderId: '44526909919',
      appId: '1:44526909919:web:ddf95d271d76f10f516c6a'
    };
    firebase.initializeApp(firebaseConfig);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>     
    );
  }
}

export default App;
