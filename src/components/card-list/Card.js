import React from "react";
import defaultCard2 from "../../images/profilPic.jpg";

const Card = (props) => {
  const cardImage = props.cardSource2 ? props.cardSource2 : defaultCard2;
  const cardStyle2 = { backgroundImage: "url(" + cardImage + ")" };

  return (
    <div className="card">
      <div className="card-img2 " style={cardStyle2}>
          <h5 className="text-light bg-dark bg-opacity-25">{props.imgTitle}</h5>
      </div>
      <div className="p-3">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.text}</p>
        <p className="card-text mt-1">{props.text2}</p>
        <a href="#" className="card-link">
          {props.link}
        </a>
      </div>
    </div>
  );
};

export default Card;
