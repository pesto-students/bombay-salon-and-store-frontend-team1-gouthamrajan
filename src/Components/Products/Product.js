import React, { useEffect, useState } from "react";
import CardItem from "../CardItem/CardItem";
import styles from "./Product.module.scss";
import axios from "../../config/axiosConfig";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("/app/products").then((response) => {
      setProducts(response.data.products);
    });
  }, []);

  return (
    <div className={styles.card_container}>
      <div className={styles.card_section}>
        {products.slice(0, 4).map((data) => (
          <CardItem
            width="24%"
            height="150px"
            src={data.image_url}
            productId={data.id}
            label={data.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Product;
