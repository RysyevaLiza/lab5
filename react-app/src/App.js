import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import Header from "./components /Header";
import About from "./components /About";
import Hotel from "./components /Hotel";
import Room from "./components /Room";
import Order from "./components /Order";
import Form from "react-bootstrap/Form";
import {Provider} from "react-redux";
import {store} from "./components /store";


function App() {

  return (
      <Provider store = {store}>
          <BrowserRouter basename="/">
              <Header/>
              <Switch>
                  <Route exact path="/">
                      <h1>Туроператор "PegasFly" - новая высота вашего отдыха!</h1>
                      <h2>Раз вы здесь, значит - время для путешествий</h2>
                      <Hotel/>
                  </Route>
                  <Route path={'/about'}>
                      <About/>
                  </Route>
                  <Route path={'/room/:room_pk'}>
                      <Room/>
                  </Route>
                  <Route path={'/order/:id'}>
                      <Order/>
                  </Route>
                  <Route path={'/form'}>
                      <Form/>
                  </Route>


              </Switch>
          </BrowserRouter>
      </Provider>

  );
}

export default App;

