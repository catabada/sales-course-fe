import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { privateRoutes, publicRoutes } from './routes';
import { DefaultLayout } from './layouts';
import { useSelector } from 'react-redux';
import React from 'react';
import { useJwt } from 'react-jwt';
import { adminRoutes } from './routes/routes';
import { ROLE_ADMIN, ROLE_MEMBER } from './constants/Authorities';


function App() {
    const { isLogin } = useSelector(state => state.authReducer)
    const { accessToken } = useSelector(state => state.authReducer)
    const { decodedToken, isExpired } = useJwt(accessToken)
    console.log(decodedToken, isExpired)

    return (
        <div className="App">
            <Routes>
                {publicRoutes.map((route, index) => {
                    const Page = route.component;
                    let Layout = DefaultLayout;

                    if (route.layout) {
                        Layout = route.layout;
                    }
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            exact={route.exact}
                            element={
                                <Layout>
                                    <Page />
                                </Layout>
                            }
                        />
                    );
                })}
                {privateRoutes.map((route, index) => {
                    const Page = route.component;
                    let Layout = DefaultLayout;

                    if (route.layout) {
                        Layout = route.layout;
                    }
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            exact={route.exact}
                            element={
                                isLogin
                                    ? <Layout>
                                        <Page />
                                    </Layout>
                                    : <Navigate to="/auth/signin" />
                            }
                        />
                    )

                })};
                {!!decodedToken && adminRoutes.map((route, index) => {
                    const Page = route.component;
                    let Layout = DefaultLayout;

                    if (route.layout) {
                        Layout = route.layout;
                    }
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            exact={route.exact}
                            element={
                                isLogin && decodedToken?.authorities.includes(ROLE_ADMIN)
                                    ? <Layout>
                                        <Page />
                                    </Layout>
                                    : <Navigate to="/auth/signin" />
                            }
                        />
                    )

                })}

            </Routes>
        </div>
    );
}

export default App;
