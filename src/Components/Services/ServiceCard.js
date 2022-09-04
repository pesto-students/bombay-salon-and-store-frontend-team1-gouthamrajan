import React, { useEffect, useState } from "react";
import CardItem from "./ServiceCardItem";
import styles from "./ServiceCard.module.scss";
import axios from '../../config/axiosConfig';

const ServiceCards = () => {

  
  const [services, setServices] = useState([])

  useEffect(() => {
    axios.get('/app/services')
      .then((response) => {
        setServices(response.data.services)
      })
  }, [])

  return (
        <div className={styles.service_cards_container}>

        </div>
  );
};

export default ServiceCards;
