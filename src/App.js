import React from "react";
import "./App.css";
import InstaGrid from "./components/instagram/instaGrid";
import { Route, Switch, Link } from "react-router-dom";
import { Homepage, Contact, Gallery } from "./components/routes/exportRoutes";
import headerImage from "./images/image2.jpg";
function App() {
  return (
    <div className="App">
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingTop: "30px",
          color: "black",
          fontWeight: "bold"
        }}
      >
        <Link to="/" style={{ textDecoration: "none", color: "black", fontSize:"30px" }}>
          YISAG
        </Link>
        <div>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "black",
              paddingRight: "5px"
            }}
          >
            HOME
          </Link>
          <Link
            to="/gallery"
            style={{
              textDecoration: "none",
              color: "black",
              paddingRight: "5px"
            }}
          >
            GALLERY
          </Link>
          <Link
            to="/contact"
            style={{
              textDecoration: "none",
              color: "black",
              paddingRight: "5px"
            }}
          >
            CONTACT
          </Link>
          <a
            href="https://www.instagram.com/yisag_"
            style={{
              textDecoration: "none",
              color: "black",
              paddingRight: "5px"
            }}
          >
            INSTAGRAM
          </a>
        </div>
      </nav>
      <header className="App-header">
        <img src={headerImage} style={{ width: "100%", marginTop:"200px" }} />
      </header>

      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/gallery" component={Gallery} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
