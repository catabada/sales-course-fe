import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '~/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from '~/reportWebVitals';
import GlobalStyles from '~/components/global-styles';


import { createTheme, ThemeProvider } from "@mui/material";
import { Provider } from 'react-redux/es';
import { persistor, store } from '~/app/store.';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';


const root = ReactDOM.createRoot(document.getElementById('root'));
const theme = createTheme({
    typography: {

        fontFamily: 'Inter, sans-serif',
    },
    palette: {
        primary: {
            main: '#fccf00',
        }
    }
})
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <GlobalStyles>
                        <ThemeProvider theme={theme}>
                            <App />
                        </ThemeProvider>
                    </GlobalStyles>
                </PersistGate>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
