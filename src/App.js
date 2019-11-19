import React from "react";
import { Route, Switch } from "react-router-dom";
import {
  Homepage,
  NotFound,
  Footer
} from "./components/storeRoutes/storeRoutes";
import cornerBorder from "./images/cornerborder.svg";
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
          style={{ width: "110px", left: "0%", top: "0%", position: "fixed" }}
        />
        <img
          src={cornerBorder}
          style={{
            width: "110px",
            left: "0%",
            bottom: "0%",
            position: "fixed",
            transform: "rotate(270deg)"
          }}
        />
        <img
          src={cornerBorder}
          style={{
            width: "110px",
            right: "0%",
            bottom: "0%",
            // float: "right",
            position: "fixed",
            transform: "rotate(180deg)"
          }}
        />
        <img
          src={cornerBorder}
          style={{
            right: "100%",
            top: "0%",
            // width: "100px",
            width: "110px",
            right: "0%",
            float: "right",
            position: "fixed",
            transform: "rotate(90deg)"
          }}
        />
      </div>
      <Footer />{" "}
    </div>
  );
}

export default App;
