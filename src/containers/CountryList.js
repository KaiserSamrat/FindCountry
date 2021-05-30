import React, { useEffect } from 'react';
import axios from "axios"

import {setCountries} from '../redux/actions/productAction'
import { useDispatch, useSelector } from 'react-redux';
import CountryComponent from './CountryComponent';



const CountryList = () => {
    const countries = useSelector((state) => state);
    const dispatch = useDispatch();

    const fetchProducts = async () => {
        const response = await axios
            .get("https://restcountries.eu/rest/v2/all")
            .catch((err) => {
                console.log("Err: ", err);
            });
        dispatch(setCountries(response.data));
    };

    useEffect(() => {
        fetchProducts();
    }, []);
    console.log(countries);
    return (
        <div className="container row">
        <CountryComponent/>
        </div>
    );
};

export default CountryList;