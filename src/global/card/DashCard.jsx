import React from "react";
import "./DashCrad.css";

const DashCard = ({ icon, title, count }) => {
  return (
    <div className="card__container">
      <div className="icon__container">
        <div className="icon__style">{icon}</div>
      </div>
      <div className="card__contain">
        <div className="card__count">{count}</div>
        <div className="card__title">{title}</div>
      </div>
    </div>
  );
};

export default React.memo(DashCard);
