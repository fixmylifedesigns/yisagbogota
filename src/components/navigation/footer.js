import React, { Component } from 'react'
import "../../CSS/footer.css"

export default class Footer extends Component {
    render() {
        return (
            <div className="footer-container">
                <h4>Copyright © 2019 </h4>
                <h4>Design by <a href="https://www.duranirving.com" style={{textDecoration:"none", color:"#FF006D"}}>Fixmylife Designs</a> </h4>
            </div>
        )
    }
}
