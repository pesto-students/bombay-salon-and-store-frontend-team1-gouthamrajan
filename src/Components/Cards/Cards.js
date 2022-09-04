import React, { useEffect, useState } from "react";
import CardItem from "../CardItem/CardItem";
import styles from "./Cards.module.scss";
import axios from '../../config/axiosConfig';

const Cards = () => {

  const [services, setServices] = useState([])

  useEffect(() => {
    axios.get('/app/services')
      .then((response) => {
        setServices(response.data.services)
      })
  }, [])


  return (
    <div
      className={styles.card_container}
    >
      <div className={styles.card_section}>
        {services.slice(0,4).map((data) => (
          <CardItem width="48%" height="80px" src={data.image_url} label={data.name} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
