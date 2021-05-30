import React from 'react';
import './countryDetails.css'
import { useEffect } from "react";
import axios from "axios";
import { selectCountry } from "../redux/actions/productAction"
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
const CountryDetails = () => {
    const { countryName } = useParams()
    let country = useSelector((state) => state.countries);
    const { name, flag, capital, population,region } = country;

    const dispatch = useDispatch();
    const fetchCountryDetail = async (countryName) => {
        const response = await axios
            .get(`https://restcountries.eu/rest/v2/name/${countryName}`)
            .catch((err) => {
                console.log("Err: ", err);
            });
        dispatch(selectCountry(response.data[0]));
    };
    useEffect(() => {
        if (countryName && countryName !== "")
            fetchCountryDetail(countryName);

    }, [countryName]);

    return (

        <div className="container" key={name}>
           
                <div class="card" >
                    <img class="card-img-top details-img" src={flag} alt="Card image cap" />
                    <div class="card-body">
                        <h5 class="card-title">Name: {name}</h5>
                        <p class="card-text">Population: {population}</p>
                        <p class="card-text">Capital: {capital}</p>
                        <p class="card-text">Region: {region}</p>
                    </div>
                </div>
           
        </div>
          
    );
};
        
                    
export default CountryDetails;