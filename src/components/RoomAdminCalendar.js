import React, { useEffect, useRef } from 'react';

function RoomAdminCalendar() {
    const iframeRef = useRef(null);

    const calendarStyle = {
        color_accent: "#A1195B",
        color_bg: "#FFFFFF",
    };

    const encodedStyle = encodeURIComponent(JSON.stringify(calendarStyle));

    useEffect(() => {
        const iframe = iframeRef.current;
        const raMessageReceiver = (event) => {
            if (!event.data.sender || "ra-calendar-single-d3c296cf3b65e045248e5f5274602de0" !== event.data.sender) { return; }
            if (event.data.height) { iframe.style.height = (event.data.height + 10) + "px"; }
        };
        window.addEventListener("message", raMessageReceiver, false);

        const setup = () => {
            try {
                iframe.contentWindow.postMessage({
                    location: window.location.toString(),
                    setup: { autoHeight: true, senderName : "ra-calendar-single-d3c296cf3b65e045248e5f5274602de0" }
                }, "*");
            } catch (e) { console.error(e); }
        };

        setInterval(setup, 1000);
        iframe.addEventListener("load", setup);

        return () => window.removeEventListener("message", raMessageReceiver);
    }, []);

    return (
        <div>
            <iframe ref={iframeRef} id="ra-calendar-single-d3c296cf3b65e045248e5f5274602de0" style={{width: '100%', height:'540px', border: 'none', padding: '0'}} src={`//roomadmin.pl/widget/calendar-single/index?fh=fef9697d874d71a4939e6e600c1954e36cc596b1&rid=56263&disableReservationButton=1&n=6&style=${encodedStyle}`}></iframe>
            <a href="https://roomadmin.pl">system rezerwacji - roomadmin.pl</a>
        </div>
    );
}

export default RoomAdminCalendar;
