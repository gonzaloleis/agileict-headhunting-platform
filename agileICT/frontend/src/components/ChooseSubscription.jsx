import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../ChooseSubscription.css';

const ChooseSubscription = () => {
    const navigate = useNavigate();

    const handleSubscriptionClick = (plan) => {
        navigate(`/register-empresa?plan=${plan}`);
    };

    const handleBackClick = () => {
        navigate('/');
    };

    return (
        <div className="choose-subscription-container">
            <h2>Elegir Suscripción</h2>
            <div className="subscription-options">
                <div className="subscription-option" onClick={() => handleSubscriptionClick('oro')}>
                    <img src="/images/plan_oro.png" alt="Plan Oro" className="subscription-image" />
                </div>
                <div className="subscription-option" onClick={() => handleSubscriptionClick('plata')}>
                    <img src="/images/plan_plata.png" alt="Plan Plata" className="subscription-image" />
                </div>
                <div className="subscription-option" onClick={() => handleSubscriptionClick('bronce')}>
                    <img src="/images/plan_bronce.png" alt="Plan Bronce" className="subscription-image" />
                </div>
            </div>
            <button className="back-button" onClick={handleBackClick}>Volver</button>

        </div>
    );
};

export default ChooseSubscription;