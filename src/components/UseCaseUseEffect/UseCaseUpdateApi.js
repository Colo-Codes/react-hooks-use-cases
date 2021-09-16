import { useState, useEffect } from "react";
import classes from './UseCaseUpdateApi.module.css';

// SECTION - Functions

const getCurrentTime = () => {
    const now = new Date();
    const time = now.getHours() + ':' + ('0' + now.getMinutes()).slice(-2) + ':' + ('0' + now.getSeconds()).slice(-2);
    return time;
};

// SECTION - Components

const ExchangeRate = props => {
    const [exchangeRate, setExchangeRate] = useState(0);
    const [isAnimated, setIsAnimated] = useState(false);

    useEffect(() => {
        const getExchangeRate = async () => {
            // Please don't abuse my personal API key :)
            const response = await fetch("https://api.nomics.com/v1/exchange-rates?key=86983dc29fd051ced016bca55e301e620fcc51c4");
            const data = await response.json();
            console.log(data.find(item => item.currency === "BTC").rate);
            setExchangeRate(data.find(item => item.currency === "BTC").rate);
        };
        getExchangeRate();

        // Triggering animation
        setIsAnimated(true);
        const classTimer = setTimeout(() => {
            setIsAnimated(false);
        }, 1500);

        // Clear the timer before setting a new one
        return () => {
            clearTimeout(classTimer);
            setExchangeRate(exchangeRate); // Preventing Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.
        };
    }, [props.onTime, exchangeRate]);

    const priceClasses = isAnimated ? `${classes.price} ${classes.heartbeat}` : `${classes.price}`;

    return <div className={priceClasses}>USD <b>{exchangeRate}</b></div>;
};

const UseCaseUpdateApi = props => {
    const [time, setTime] = useState(getCurrentTime());

    // Trigger the update interval on startup (mount)
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(getCurrentTime());
        }, 3000);
        return () => clearInterval(interval);
    }, []); // Empty dependencies array, so it will run once at mount and keep running 'in the background'

    console.log(time);

    return (
        <>
            <hr />
            <h2>useEffect use case</h2>
            <h3>Running on props change: updating fetched API data to get updated BTC price</h3>
            <span>Last updated: {time} (polling every 3 seconds)</span><ExchangeRate onTime={time} />
        </>
    );
};

export default UseCaseUpdateApi;