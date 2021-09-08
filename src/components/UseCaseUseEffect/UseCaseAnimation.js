import { useState, useEffect } from 'react';
import classes from './UseCaseAnimation.module.css';

const products = [
    'Death Star',
    'CR90 corvette',
    'Millennium Falcon',
    'X-wing fighter',
    'TIE fighter'
];

const UseCaseAnimation = props => {
    const [cart, setCart] = useState([]);
    const [triggerAnimation, setTriggerAnimation] = useState(false);

    // Add item to the cart (array)
    const clickHandler = e => {
        e.preventDefault();
        setCart(prevCart => {
            const newCart = [...prevCart];
            newCart.push(e.target.value);
            return newCart;
        });
    };

    // Clear the cart (array)
    const clearHandler = e => {
        e.preventDefault();
        setCart([]);
    };

    // Trigger cart animation
    useEffect(() => {
        setTriggerAnimation(true);

        const timer = setTimeout(() => {
            setTriggerAnimation(false);
        }, 900); // The duration of the animation defined in the CSS file

        // Clear the timer before setting a new one
        return () => {
            clearTimeout(timer);
        };
    }, [cart]);

    const cartClasses = triggerAnimation ? `${classes['jello-horizontal']} ${classes.cart}` : classes.cart;

    const itemsOnSale = products.map(itemOnSale => {
        return <li><form><span className={classes.item}>{itemOnSale}  <button onClick={clickHandler} value={`"${itemOnSale}"`}>Add to cart</button></span></form></li >;
    });

    const cartItems = cart.map(item => {
        return <li>{item}</li>;
    });

    return (
        <>
            <hr />
            <h2>useEffect use case</h2>
            <h3>Running on state change: trigger animation on new array value</h3>
            <h4 style={{ color: 'blue' }}>Starship Marketplace</h4>
            <ul>
                {itemsOnSale}
            </ul>
            <div className={cartClasses}><span>Cart</span></div>
            <div>
                <p>Elements in cart:</p>
                <ul>
                    {cartItems}
                </ul>
            </div>
            <form><button className={classes.margin} onClick={clearHandler} value="clear">Clear cart</button></form>
        </>
    );
};

export default UseCaseAnimation;