import React from "react";
import StripeChckout from "react-stripe-checkout";

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51HfK5vHguea1Yg4JEPlvxvyKRU7zuv6ifqdOKA1MwMlt13k6WvXUxB4OYPN3qSNQtvC0AlzqzS42OYUAt2UMyXPx00xBKj1LWX";

    const onToken = token => {
        console.log(token);
        alert("Payment successful!");
    };

    return (
        <StripeChckout
            label="Pay Now"
            name="CRWN Clothing Ltd."
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;