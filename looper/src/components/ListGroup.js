import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function ListGroup(props) {
  const listItems = props.items.map((item, index) => (
    <li
      key={index}
      className="list-group-item d-flex justify-content-between align-items-center"
    >
      <h4>{item}</h4>
      <button type="button" className="btn btn-danger btn-sm">
        Delete
      </button>
    </li>
  ));
  return <ul class="list-group">{listItems}</ul>;
}

export default ListGroup;
