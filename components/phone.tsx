import React from "react";

const Phone3D = ({ imageUrl }) => {
  return (
    <div className="phone-container">
      <div className="phone-frame">
        <div className="phone-screen">
          <img src={imageUrl} alt="Screen content" />
        </div>
      </div>
    </div>
  );
};

export default Phone3D;