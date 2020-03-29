import React from "react";
import PageNotFound from "../assets/images/PageNotFound.png";
import { Link } from 'react-router-dom'

const NotFound = () => (
  <div>
    {
      <img
        alt="WTF Dont You See??! Of Course It's A Fucking 404 Page You Fucking Idiot"
        src={PageNotFound}
        style={{
          width: 800,
          height: 400,
          display: "block",
          margin: "auto",
          position: "relative"
        }}
      />
    }
    <center>
      <p
        style={{
          fontSize: 32
        }}
      >
        Page Not Found
      </p>
      <Link to="/">Return to Home Page</Link>
    </center>
  </div>
);
export default NotFound;
