import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./OrderPlaced.module.scss";
import axios from "../../config/axiosConfig";
import { CircularProgress } from "@mui/material";
import { toast } from "react-toastify";

const OrderPlaced = () => {
  const params = useParams();
  const [isPaymentLoading, setIsPaymentLoading] = useState(true)
  useEffect(() => {
    if (params.id) {
      const paymentInterval = setInterval(() => {
        axios
          .get(
            `/app/${params.type == "product" ? "order" : "booking"}/${params.id
            }`
          )
          .then((response) => {
            console.log(response.data);
            if (response.data.order.payment_status == "paid") {
              setIsPaymentLoading(false)
              toast.success('Payment Success')
              clearInterval(paymentInterval);
            }
          });
      }, 10000);
    }
  }, [params.id]);

  return (
    <div className={styles.order_placed_container}>
      <div className={styles.details_box}>
        <div
          style={{
            fontWeight: 600,
            fontSize: '24px'
          }}
        >
          Thank You
        </div>

        {isPaymentLoading && (
          <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
          >
            <div>
              Please wait we are verifying your payment
            </div>
            <CircularProgress />
          </div>
        )}

      </div>
      <div></div>
    </div>
  );
};

export default OrderPlaced;
