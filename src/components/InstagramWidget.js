import React from 'react';
import "../scss/Together.scss"

const InstagramWidget = () => {
    const instagramUrl = 'https://www.instagram.com/p/CtPkbziIyCp/embed';

    return (
        <div className="instagram-widget">
            <iframe
                title="Instagram Post"
                src={instagramUrl}
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                allowTransparency="true"
                loading="lazy"
            ></iframe>
        </div>
    );
};


export default InstagramWidget;
