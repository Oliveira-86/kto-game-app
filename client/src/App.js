import "./App.css";
import { ThemeProvider } from "styled-components";
import theme from "./global/theme";
import Home from "./screens/Home";
import { GlobalStyle } from "./global/Style";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Auth from "./screens/Auth";
import { store } from "./feature/store";
import { Provider } from "react-redux";

function App() {
  const user = JSON.parse(localStorage.getItem("profile"));

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route>
              <Auth />
            </Route>
          </Switch>
        </Router>
        <GlobalStyle whiteColor />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
//       {/* <Route path="/" exact component={() => <Redirect to="/home" />} />
//       <Route path="/home" exact component={Home} /> */}
//       <Route path="/auth" exact component={Home} />
