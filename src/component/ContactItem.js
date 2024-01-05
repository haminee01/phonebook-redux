import React from "react";
import { Col, Row } from "react-bootstrap";

const ContactItem = ({ item }) => {
  return (
    <div className="Row list-item">
      <div className="list-item-img" Col-lg-1>
        <img
          width={50}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/925px-Unknown_person.jpg"
        />
      </div>
      <div Col-lg-11>
        <div>{item.name}</div>
        <div>{item.phoneNumber}</div>
      </div>
    </div>
  );
};

export default ContactItem;
