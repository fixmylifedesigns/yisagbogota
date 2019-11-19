import React from "react";
// import InstaGrid from "../instagram/instaGrid";
import TestMap from "../googlemap/map";
export default function Homepage() {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <div style={{width:"300px"}}>
          <h4>EST</h4>
          <h2>2014</h2>
          <div
            style={{
              borderBottom: "solid",
              paddingBottom: "5px",
              width: "20px",
              margin: "auto"
            }}
          />
        </div>
        <div  style={{width:"60%", textAlign:"left"}}>
          <h1>Lorem ipsum dolor sit amet</h1>
          <div
            style={{
              borderBottom: "solid",
              paddingBottom: "5px",
              width: "20px",
            }}
          />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      <div>
        <h3>APPOINTMENTS AND WALK-INS WELCOMED</h3>
        <p>Ak. 15 #74-60, Bogotá, Colombia PISO 2</p>
        <br />
        <h3>CONTACT</h3>
        <p>+57 319 3472867</p>
        <p>hdjdjejewi@GMAIL.COM</p>
      </div>
      <TestMap />
    </div>
  );
}
