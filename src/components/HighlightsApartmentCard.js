import React from 'react';
import wifiIcon from '../assets/highlights/wifi-icon.png';
import sofaIcon from '../assets/highlights/sofa-icon.png';
import foodIcon from '../assets/highlights/food-icon.png';
import washerIcon from '../assets/highlights/washer-icon.png';
import climatIcon from '../assets/highlights/clima-icon.png';
import saunaIcon from '../assets/highlights/sauna-icon.png';
import mountainIcon from '../assets/highlights/mountain-icon.png';

import "../scss/HighlightsApartmentCard.scss";

const HighlightsApartmentCard = () => {
    return (
        <div className="highlights-container">
            <div className="highlights-icons">
                <div className="highlights-wifi" style={{ backgroundImage: `url(${wifiIcon})` }}></div>
                <div className="highlights-sofa" style={{ backgroundImage: `url(${sofaIcon})` }}></div>
                <div className="highlights-food" style={{ backgroundImage: `url(${foodIcon})` }}></div>
                <div className="highlights-washer" style={{ backgroundImage: `url(${washerIcon})` }}></div>
                <div className="highlights-clima" style={{ backgroundImage: `url(${climatIcon})` }}></div>
                <div className="highlights-sauna" style={{ backgroundImage: `url(${saunaIcon})` }}></div>
                <div className="highlights-mountain" style={{ backgroundImage: `url(${mountainIcon})` }}></div>
            </div>
        </div>
    );
}

export default HighlightsApartmentCard;
