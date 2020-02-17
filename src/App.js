import React from "react";
import { Route, Switch } from "react-router-dom";
import {
  Homepage,
  NotFound,
  Footer
} from "./components/storeRoutes/storeRoutes";
import cornerBorder from "./images/yisag2.png";
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
      <div style={{ position: "fixed", width: "100vw", height: "100vh" }}>
        <img
          src={cornerBorder}
          alt=""
          style={{
            width: "90px",
            left: "0%",
            top: "0%",
            position: "fixed",
            transform: "scaleX(-1)"
          }}
        />
        <img
          src={cornerBorder}
          alt=""
          style={{
            width: "90px",
            left: "0%",
            bottom: "0%",
            position: "fixed",
            transform: "scaleX(-1)"
          }}
        />
        <img
          src={cornerBorder}
          alt=""
          style={{
            width: "90px",
            right: "0%",
            bottom: "0%",
            position: "fixed"
          }}
        />
        <img
          src={cornerBorder}
          alt=""
          style={{
            top: "0%",
            width: "90px",
            right: "0%",
            float: "right",
            position: "fixed"
          }}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
