import React from "react";
import { Link } from "react-router-dom";
const Exercise = ({ exercise, onDelete }) => {
  const { username, duration, description, date, _id } = exercise;
  return (
    <tr>
      <td>{username}</td>
      <td>{duration}</td>
      <td>{description}</td>
      <td>{date.slice(0, 10)}</td>
      <td>
        <Link to={`/edit/${_id}`}>Edit</Link>|
        <button onClick={() => onDelete(_id)}>delete</button>
      </td>
    </tr>
  );
};
export default Exercise;
