import React from "react";
import logo from "../img/loading2.gif";

const Loading = props => {
  const loadingStyle = {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    background: "rgba(0, 0, 0, 0.4)",
    display: "flex",
    alignItem: "center",
    justifyContent: "center"
  };
  return (
    <div style={loadingStyle}>
      <img src={logo} alt="loading..." className="w-25 h-25 my-auto" />
    </div>
  );
};

export default Loading;
