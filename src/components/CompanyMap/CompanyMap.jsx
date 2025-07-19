import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import getStoredData from '../../json/fetchData';

// Fix for missing marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const CompanyMap = () => {
  const [mapInfo, setMapInfo] = useState(null);

  useEffect(() => {
    const loadMapData = async () => {
      const data = await getStoredData();
      if (data && data["5"] && data["5"].map) {
        setMapInfo(data["5"].map);
      }
    };
    loadMapData();
  }, []);

  if (!mapInfo) return <p>Loading map...</p>;

  const center = {
    lat: parseFloat(mapInfo.ContactOfficeLat),
    lng: parseFloat(mapInfo.ContactOfficeLong),
  };

  const handleMarkerClick = () => {
    if (mapInfo.ContactOfficeAddressLink) {
      window.open(mapInfo.ContactOfficeAddressLink, '_blank');
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
      <div style={{ width: '400px', height: '300px', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
        <MapContainer center={center} zoom={18} style={{ width: '100%', height: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          />
          <Marker position={center} eventHandlers={{ click: handleMarkerClick }}>
            <Popup>{mapInfo.ContactOffice}</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default CompanyMap;
