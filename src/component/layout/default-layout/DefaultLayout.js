import Header from "./header/Header";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {publicRoutes} from "../../../routes";
import Footer from "./footer/Footer";

function DefaultLayout() {
    return <Router>
        <div className='page'>

            {/*Header*/}
            <Header/>

            {/*Router outlet*/}
            <Routes>
                {publicRoutes.map((route, index) => {
                    return <Route key={index}
                                  path={route.path}
                                  element={route.component}
                    >
                    </Route>
                })}
            </Routes>

            {/*Footer*/}
            <Footer/>

        </div>
    </Router>
}

export default DefaultLayout