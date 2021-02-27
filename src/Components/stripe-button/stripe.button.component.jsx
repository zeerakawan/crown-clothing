import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IPQsoAdDKTACrW9q0YsZnzIpEi9QfPfg7Zab9zsZH8VZDssZGAXCvPwQZTiaXOUO40cPolvjTHzVJiawPtunrLS002PW7xhtT';
    const onToken = (token) => {
        console.log(token)
        alert('Payment Sucessful')
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='Crown Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total bill is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;