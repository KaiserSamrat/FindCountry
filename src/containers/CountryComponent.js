import React from 'react';
import { useSelector } from 'react-redux';

const CountryComponent = () => {
    const countries = useSelector((state) => state.allCountries.countries);
    const countryList = countries.map((country) => {

        const { name, flag } = country;
        return (

            <div className="col-md-4">
                <div class="card" >
                    <img class="card-img-top" src={flag} alt="Card image cap"/>
                        <div class="card-body">
                            <h5 class="card-title">{name}</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
</div>
                </div>
    );
  });
  return <>{countryList}</>;
};


export default CountryComponent;