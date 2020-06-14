import React from 'react';
import ReactDOM from 'react-dom';
import HttpsRedirect from 'react-https-redirect';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ThemeProvider } from './components/themes/ThemeContext';
import { BrowserRouter } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';

ReactDOM.render(
	<HttpsRedirect>
		<ErrorBoundary render={() => <p>Oops! an error occurred, Try again later.</p>}>
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
