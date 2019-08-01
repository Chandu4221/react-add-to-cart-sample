import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Store from "./store/Store";
import UserPage from "./pages/UsersPage";
import CartPage from "./pages/CartPage";
import Navigation from "./components/Navigation";
class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <div className="App">
          <BrowserRouter>
            <Navigation />
            <div className="container-fluid">
              <Switch>
                <Route exact path="/" component={UserPage} />
                <Route exact path="/cart" component={CartPage} />
              </Switch>
            </div>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
