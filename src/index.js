import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '~/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from '~/reportWebVitals';
import GlobalStyles from '~/components/GlobalStyles';
import { createMuiTheme, ThemeProvider, useTheme } from '@mui/material/styles';

const root = ReactDOM.createRoot(document.getElementById('root'));
const theme = createMuiTheme({
    typography: {
        fontFamily: 'Segoe UI',
    },
});
root.render(
    <React.StrictMode>
        <GlobalStyles>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </GlobalStyles>
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
