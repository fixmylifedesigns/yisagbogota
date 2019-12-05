import React from "react";
import cartoon from "../../images/logo.svg";
import logo from '../../images/yisag.png'
import "../../CSS/homepage.css";
import Map from "../googlemaps/map";
import ContactForm from "../material-ui/contactform";
import MobileMenu from "../material-ui/mobilemenu";
import Button from "@material-ui/core/Button";
import InstaGrid from "../instagram/instaGrid";

export default function Homepage(props) {
  return (
    <div>
      <section id="header" className="intro section dark">
        <div className="mobileMenuContainer">
          <MobileMenu />
        </div>

        <div className="section-container">
          <div className="all-content">
            <img src={logo} alt="portrait" className="portrait" />
          </div>
          <nav className="navigation none">
            {/* <Link to="/projects">Gallery</Link> */}
            <a href="https://wa.me/573193472867">Whatsapp</a>
            {/* <a href="https://github.com/fixmylifedesigns">Contact</a> */}
            <a href="https://www.instagram.com/yisag_/">Instagram</a>
          </nav>
        </div>
      </section>
      <section id="recentprojects" className="section light">
        <div className="section-container">
          <h1 className="title font-light ">
            Specials{"     "}
          </h1>
          <div className="cards-container">
            <InstaGrid account="enelprincipiotodoeraoscuridad" />
          </div>
        </div>
      </section>
      <section id="recentprojects" className="section light">
        <div className="section-container">
          <h1 className="title font-light ">
            INSTAGRAM{"     "}
            <Button
              style={{
                background: "#3897F0"
              }}
            >
              <a
                href="https://www.instagram.com/yisag_/"
                style={{
                  fontWeight: "bold",
                  color: "white",
                  textDecoration: "none"
                }}
              >
                Follow
              </a>
            </Button>
          </h1>
          <div className="cards-container">
            <InstaGrid account="yisag_" />
          </div>
        </div>
      </section>
      <section id="contact" className="section light">
        <div className="section-container">
          <h1 className="title font-dark">CONTACT</h1>
        </div>
        {/* <div>
          <h3>APPOINTMENTS AND WALK-INS WELCOMED</h3>
          <p>Ak. 15 #74-60, Bogotá, Colombia PISO 2</p>
          <br />
          <h3>CONTACT</h3>
          <p>+57 319 3472867</p>
          <p>hdjdjejewi@GMAIL.COM</p>
        </div> */}
        <div className="map-contact-container">
          <div className="googlemap">
            <h3 className="center" style={{ color: "white" }}>
            Cra15 #73-45, Bogotá, Colombia PISO 2
            </h3>
            <Map />
          </div>
          <div className="form-container">
            <h3 className="center" style={{ color: "white" }}>
              Get in touch
            </h3>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
