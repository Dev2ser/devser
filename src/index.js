import React from 'react';
import ReactDOM from 'react-dom';
import HttpsRedirect from 'react-https-redirect';
import { BrowserRouter } from 'react-router-dom';
import LogRocket from 'logrocket';
import App from './App/App';
import { ErrorBoundary, ThemeProvider } from './components';
import './index.css';
import { reloadWindow } from './services/WindowHandler';
import * as serviceWorker from './serviceWorker';
try {
  LogRocket.init(process.env.REACT_APP_LOGROCKET);
} catch (error) {
  console.log(error);
}

ReactDOM.render(
  <HttpsRedirect>
    <ErrorBoundary
      render={() => (
        <div className="flex h-screen">
          <div className="m-auto text-center">
            <p>Oops! an error has occurred, Try again later.</p>
            <button
              onClick={() => reloadWindow()}
              className="text-blue-700 hover:text-blue-700 underline hover:underline"
            >
              Refresh
            </button>
          </div>
        </div>
      )}
    >
      <BrowserRouter>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </ErrorBoundary>
  </HttpsRedirect>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
