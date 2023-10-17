import React from "react";
import "./Main.css";

const Main = () => {
  return (
    <>
      <div className="containerr">
        <div className="moon"></div>
        <div className="clouds cloud1">
          <div></div>
          <div></div>
        </div>
        <div className="clouds cloud2">
          <div></div>
          <div></div>
        </div>
        <div className="clouds cloud3">
          <div></div>
          <div></div>
        </div>
        <div className="clouds cloud3">
          <div></div>
          <div></div>
        </div>
        <div className="clouds cloud4">
          <div></div>
          <div></div>
        </div>
        <div className="clouds cloud5">
          <div></div>
          <div></div>
        </div>

        <div className="smoke">
          <div></div>
        </div>

        <div className="tree tree1"></div>
        <div className="tree tree2"></div>
        <div className="tree tree3"></div>
        <div className="tree tree4"></div>
        <div className="tree tree5"></div>
        <div className="heading_ctn">
          <h2
            className="heading_samyuktha"
            style={{ letterSpacing: "6px", margin: "1.2em" }}
          >
            <span style={{ "--i": 1 }}>S</span>
            <span style={{ "--i": 2 }}>a</span>
            <span style={{ "--i": 3 }}>m</span>
            <span style={{ "--i": 4 }}>y</span>
            <span style={{ "--i": 5 }}>u</span>
            <span style={{ "--i": 6 }}>k</span>
            <span style={{ "--i": 7 }}>t</span>
            <span style={{ "--i": 8 }}>h</span>
            <span style={{ "--i": 9 }}>a</span>
            {/* <span style={{ "--i": 10 }}>7</span>
                    <span style={{ "--i": 11 }}>.</span>
                    <span style={{ "--i": 12 }}>0</span> */}
          </h2>
        </div>
        <br />
      </div>
      <img src="https://i.imgur.com/EtCPE3S.png" alt="png" className="spider" />
      <img
        src="https://i.imgur.com/VlAEovB.png"
        alt="png"
        className="pumpkin01"
      />
      <img
        src="https://i.imgur.com/z1sM4My.png"
        alt="png"
        className="pumpkin02"
      />
    </>
  );
};

export default Main;
