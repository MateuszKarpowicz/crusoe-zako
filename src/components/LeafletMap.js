import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './leafleatMap.css'
import L from 'leaflet';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import { useTranslation } from 'react-i18next';
import customIcon from '../assets/contactPage/pointer.png';


const LeafletMap = ({ handleGetDirectionsClick }) => {
    const customMarkerIcon = L.icon({
        iconUrl: customIcon,
        shadowUrl: iconShadow,
        iconAnchor: [12, 41],
      });
      
      L.Marker.prototype.options.icon = customMarkerIcon;

    const position = [49.2980, 19.9482];
    const { t } = useTranslation();


    return (
        <div className="contact-map-section">
            <h2 className="column-title">{t('contactPage.mapLabel')}</h2>
            <div className="map-wrapper">
                <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={position} icon={customMarkerIcon}>
                        <Popup>{t('contactPage.mapPopup')}</Popup>
                    </Marker>
                </MapContainer>
            </div>
            <div className="get-directions">
                <button className="custom-button" onClick={handleGetDirectionsClick}>
                    {t('contactPage.getDirectionsButton')}
                </button>
            </div>
        </div>
    );
};

export default LeafletMap;
