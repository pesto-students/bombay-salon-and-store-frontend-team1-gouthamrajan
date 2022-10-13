import React from "react";
import Cards from "../Cards/Cards";
import LandingPage from "../Banner/LandingPage";
// import ServiceCards from "../Services/ServiceCard";
import Product from "../Products/Product";

function Home() {
    return (
        <>
            <LandingPage />
            <h3
                style={{
                    textAlign: 'center'
                }}
            >
                Services
            </h3>
            <Cards />
            {/* <ServiceCards /> */}

            <h3
                style={{
                    textAlign: 'center'
                }}
            >
                Products
            </h3>
            <Product />
        </>
    );
}

export default Home;
