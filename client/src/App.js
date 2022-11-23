import "./App.css";
import { ThemeProvider } from "styled-components";
import theme from "./global/theme";
import Home from "./screens/Home";
import { GlobalStyle } from "./global/Style";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Auth from "./screens/Auth";
import { store } from "./feature/store";
import { Provider } from "react-redux";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Router>
            <Routes>
              <Route exact path='/' element={<Auth/>} />
              <Route exact path="/home" element={<Home/>} />
            </Routes>
          </Router>
          <GlobalStyle whiteColor />
        </ThemeProvider>
      </Provider>
      <ToastContainer />
    </>
  );
}

export default App;
