import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";

const ProductCard = (props) => {
  let { imgSrc } = props.data;

  return (
    <Card className="p-0 overflow-hidden shadow">
      <div className="pverflow-hidden rounded p-0 bg-light">
        <Card.Img variant="top" src={imgSrc} />
      </div>
    </Card>
  );
};

export default ProductCard;
