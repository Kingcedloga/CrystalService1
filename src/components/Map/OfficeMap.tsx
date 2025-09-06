import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { Icon } from 'leaflet';
import { MapPin, Phone, Mail } from 'lucide-react';

interface Office {
  city: string;
  district: string;
  address: string;
  phone: string;
  email: string;
  coordinates: { lat: number; lng: number };
}

interface OfficeMapProps {
  offices: Office[];
}

// Créer une icône personnalisée pour les marqueurs
const customIcon = new Icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

// Composant pour forcer le redimensionnement de la carte
const MapResizer: React.FC = () => {
  const map = useMap();
  
  React.useEffect(() => {
    // Délai pour s'assurer que les animations sont terminées
    const timer = setTimeout(() => {
      map.invalidateSize();
    }, 100);
    
    return () => clearTimeout(timer);
  }, [map]);
  
  return null;
};

export const OfficeMap: React.FC<OfficeMapProps> = ({ offices }) => {
  // Centre de la carte sur Kinshasa (position par défaut)
  const centerPosition: [number, number] = [-4.3317, 15.3139];

  return (
    <div className="h-[500px] w-full rounded-lg overflow-hidden shadow-lg">
      <MapContainer
        center={centerPosition}
        zoom={6}
        style={{ height: '100%', width: '100%' }}
        className="z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        <MapResizer />
        
        {offices.map((office, index) => (
          <Marker
            key={index}
            position={[office.coordinates.lat, office.coordinates.lng]}
            icon={customIcon}
          >
            <Popup className="custom-popup">
              <div className="p-2 min-w-[250px]">
                <h3 className="font-bold text-lg text-brand-blue-600 mb-2 flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  {office.city}
                </h3>
                <p className="text-sm text-gray-600 mb-1">
                  <strong>District:</strong> {office.district}
                </p>
                <p className="text-sm text-gray-600 mb-3">
                  <strong>Adresse:</strong> {office.address}
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <Phone className="h-3 w-3 mr-2 text-brand-blue-500" />
                    <a 
                      href={`tel:${office.phone}`}
                      className="text-brand-blue-600 hover:text-brand-blue-800"
                    >
                      {office.phone}
                    </a>
                  </div>
                  
                  <div className="flex items-center text-sm">
                    <Mail className="h-3 w-3 mr-2 text-brand-blue-500" />
                    <a 
                      href={`mailto:${office.email}`}
                      className="text-brand-blue-600 hover:text-brand-blue-800"
                    >
                      {office.email}
                    </a>
                  </div>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};