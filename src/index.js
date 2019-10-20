import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Theme from './theme';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Store from './store';
import App from './App';

ReactDOM.render(
    <MuiThemeProvider theme={ Theme }>
        <Provider store={ Store }>
            <App />
        </Provider>
    </MuiThemeProvider>,
    document.getElementById('root'),
);
