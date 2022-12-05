import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import "./ListItemStyles.css";

const ListItem = (props) => {
  return (
    <div>
      <td className="checkCircle p-1">
        <FaCheckCircle size={20} style={{ color: "#ffc107" }} />
      </td>
      <td className="p-1"><strong>{props.strongText}</strong> {props.text}</td>
    </div>
  );
};

export default ListItem;
