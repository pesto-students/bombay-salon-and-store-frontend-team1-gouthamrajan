import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./OrderPlaced.module.scss";
import axios from "../../config/axiosConfig";

const OrderPlaced = () => {
  const params = useParams();

  useEffect(() => {
    if (params.id) {
      // axios.get(`/app/order/${params.id}`).then((response) => {});
    }
  }, [params.id]);

  return (
    <div className={styles.order_placed_container}>
      <div className={styles.details_box}>
        <div
          style={{
            fontWeight: 600,
          }}
        >
          Thank You
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default OrderPlaced;
