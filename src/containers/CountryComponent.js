import React from 'react';
import './countryComponent.css'
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

const CountryComponent = () => {
    const countries = useSelector((state) => state.allCountries.countries);
    const countryList = countries.map((country) => {

        const { name, flag,capital } = country;
        return (

            <div className="col-md-4 " key={name}>
               
                    <div class="card single-country" >
                        <img class="card-img-top single-img" src={flag} alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">{name}</h5>
                            <p class="card-text">{capital}</p>
                            <Link to={`/country/${name}`} class="btn btn-dark">View Details</Link>
                        </div>
                    </div>
              
            </div>
        );
    });
    return <>{countryList}</>;
};


export default CountryComponent;