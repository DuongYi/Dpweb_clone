import React, { useState } from 'react';

/* eslint import/no-extraneous-dependencies: ["error", {"optionalDependencies": false}] */
import { createBrowserHistory } from 'history';
import { SnackbarProvider } from 'notistack';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import Auth from 'src/components/Auth/Auth';
import Ddos from 'src/views/pages/Ddos';

import store from './redux/store';
import Routes from './Routes';

import './style/App.css';

const history = createBrowserHistory();

function App() {
  const [isAuth, setIsAuth] = useState(true);

  const checkAuthHandler = () => {
    setIsAuth(true);
  };

  return (
    <>
      {isAuth ? (
        <Provider store={store}>
          <SnackbarProvider maxSnack={3}>
            <Router history={history}>
              <Auth>
                <Routes />
              </Auth>
            </Router>
          </SnackbarProvider>
        </Provider>
      ) : (
        <Ddos onCheckAuth={checkAuthHandler} />
      )}
    </>
  );
}

export default App;
