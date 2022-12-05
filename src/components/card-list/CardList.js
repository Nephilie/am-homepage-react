import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import "./CardStyles.css";
import defaultCard from "../../images/defaultCard.jpg";

// card for with list (jobs)
const CardList = (props) => {

  const cardImage = props.cardSource ? props.cardSource : defaultCard;
  const backgroundCardStyle = { backgroundImage: "url(" + cardImage + ")" };


  return (
    <div className="card mb-4">
      {/* <img style={backgroundCardStyle} /> */}
      <div className="card-img" style={backgroundCardStyle} >
        <h6 className="text-light bg-dark bg-opacity-25">{props.imgTitle}</h6>
      </div>
      <div className="card-body">
        <h6 className="card-title">{props.titleCard}</h6>
        <div>
          <tr>
            <td className="checkCircle p-1">
            <FaCheckCircle size={15} style={{ color: "green" }} />
            </td>
            <td className="p-1">{props.textCard}</td>
          </tr>
          <tr>
            <td className="checkCircle p-1">
              <FaCheckCircle size={15} style={{ color: "green" }} />
            </td>
            <td className="p-1">{props.textCard2}</td>
          </tr>
          <tr>
            <td className="checkCircle p-1">
              <FaCheckCircle size={15} style={{ color: "green" }} />
            </td>
            <td className="p-1">{props.textCard3}</td>
          </tr>
          <tr>
            <td className="checkCircle p-1">
              <FaCheckCircle size={15} style={{ color: "green" }} />
            </td>
            <td className="p-1">{props.textCard4}</td>
          </tr>
          <tr>
            <td></td>
            <td className="position-absolute bottom-0 start-50 translate-middle">
              <a href="#" className="card-link">
                {props.link}
              </a>
            </td>
          </tr>
        </div>
      </div>
    </div>
  );
};

export default CardList;
