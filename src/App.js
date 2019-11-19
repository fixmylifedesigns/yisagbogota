import React from "react";
import { Route, Switch } from "react-router-dom";
import {
  Homepage,
  NotFound,
  Footer,
} from "./components/storeRoutes/storeRoutes";
function App() {
  return (
    <div className="App">
      {/* <Navigationbar /> */}
      <header className="App-header">

        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="*" component={NotFound} />
        </Switch>
      </header>
      <Footer />
    </div>
  );
}

export default App;
