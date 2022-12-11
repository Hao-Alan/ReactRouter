import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div class="w3-sidebar w3-light-grey w3-bar-block" style={{ width: "25%" }}>
      <h3 class="w3-bar-item">Menu</h3>
      <Link to={`1000`} class="w3-bar-item w3-button me-3">
        Link1
      </Link>
      <Link to={`2000`} class="w3-bar-item w3-button">
        Link1
      </Link>
      <Link to={`bungu`} class="w3-bar-item w3-button">
        Hello 3
      </Link>
      {/* <a href="" >
        Link 1
      </a>
      <a href="50000" class="w3-bar-item w3-button">
        Link 2
      </a>
      <a href="contact/bubu" class="w3-bar-item w3-button">
        Link 3
      </a> */}
    </div>
  );
};

export default Sidebar;
