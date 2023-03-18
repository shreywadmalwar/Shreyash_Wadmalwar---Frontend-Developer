import React from "react";

function Navbars() {
  return (
    <nav style={{backgroundColor: "#152d36",}}>
      <div className="px-3">
        <div className="flex justify-between">
          <div>
            <a
              className="navbar-brand "
              style={{
                fontFamily: "Phosphate",
                fontSize: 23,
                color: "white",
              }}
              href="/"
            >
              <span style={{ fontSize: "35px", color: "#F64668" }}>S</span>
              <span style={{ color: "#f5e9e9" }}>pace</span>
              <span style={{ fontSize: "35px", color: "#F64668" }}>T</span>
              <span style={{ color: "#f5e9e9" }}>ech.co</span>
            </a>
          </div>

          <div className="flex  space-x-4">
            <a
              className="flex items-center"
              style={{ fontSize: "20px", color: "white" }}
              aria-current="page"
              href="https://www.spacex.com/mission"
            >
              <span>Mission</span>
            </a>

            <a
              className="flex items-center"
              style={{ fontSize: "20px", color: "white" }}
              aria-current="page"
              href="https://www.spacex.com/"
            >
              About SpaceX
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbars;
