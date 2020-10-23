import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

import { FaWhatsapp } from "react-icons/fa";
import { FiClock, FiInfo } from "react-icons/fi";
import { Map, Marker, TileLayer } from "react-leaflet";

import '../styles/pages/orphanage.css';
import SideBar from "../components/SideBar";

import happyMapIcon from '../utils/mapIcon';
import api from "../services/api";

interface Orphanage {
  name: string;
  about: string;
  whatsapp: string;
  instructions: string;
  description: string;
  latitude: number;
  longitude: number;
  open_on_weekends: boolean;
  opening_hours: string;
  images: Array<{
    id: number;
    url: string;
  }>;
}

interface RouteParams {
  id: string;
}

interface Position {
  latitude: number;
  longitude: number;
}

const mensagem = "Boa%20tarde%20gostária%20de%20saber%20qual%20o%20melhor%20dia%20que%20posso%20fazer%20uma%20visita%20á%20este%20orfanato?"

export default function Orphanage() {
  const params = useParams<RouteParams>();
  const [orphanage, setOrphanage] = useState<Orphanage>();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [currentPosition, setCurrentPositon] = useState<Position>({ 
    latitude: -22.824236, 
    longitude: -47.270097 
  });
  
  useEffect(() => {
    api.get(`orphanages/${params.id}`).then(response => {
      setOrphanage(response.data);
    });

    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;
      setCurrentPositon({ latitude, longitude });
      return;
    }, recused => {
      alert('Pedido de localização Recusado definimos uma localização fixo no centro de sumaré para você!!');
      return;
    })
  }, [params.id]);
  

  if(!orphanage) {
    return <p>Carregando...</p>
  }

  return (
    <div id="page-orphanage">
      <SideBar />
      <main>
        <div className="orphanage-details">
          <img src={orphanage.images[activeImageIndex].url} alt={orphanage.name} />

          <div className="images">
            {orphanage.images.map((image, index) => (
              <button 
                key={image.id} 
                className={ activeImageIndex === index ? "active" : ''}
                type="button" 
                onClick={() => { setActiveImageIndex(index); }}>
                  <img src={image.url} alt={orphanage.name} />
              </button>
            ))}
          </div>
          
          <div className="orphanage-details-content">
            <h1>{orphanage.name}</h1>
            <p>{orphanage.about}</p>

            <div className="map-container">
              <Map 
                center={[orphanage.latitude, orphanage.longitude]}
                zoom={16}
                style={{ width: '100%', height: 280 }}
                dragging={false}
                touchZoom={false}
                zoomControl={false}
                scrollWheelZoom={false}
                doubleClickZoom={false}
              >
                <TileLayer 
                  url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />
                <Marker interactive={false} icon={happyMapIcon} position={
                  [orphanage.latitude, orphanage.longitude]} 
                />
              </Map>

              <footer>
                <a target="_blank" rel="noopener noreferrer" 
                  href={`https://www.google.com/maps/dir/?api=1&origin=${currentPosition.latitude},${currentPosition.longitude}&destination=${orphanage.latitude},${orphanage.longitude}`}>Ver rotas no Google Maps</a>
              </footer>
            </div>

            <hr />

            <h2>Instruções para visita</h2>
            <p>{orphanage.instructions}</p>

            <div className="open-details">
              <div className="hour">
                <FiClock size={32} color="#15B6D6" />
                Segunda à Sexta <br />
                {orphanage.opening_hours}
              </div>
              { orphanage.open_on_weekends 
              ?
                <div className="open-on-weekends">
                  <FiInfo size={32} color="#39CC83" />
                  Atendemos <br />
                  fim de semana
                </div>
              :
                <div className="open-on-weekends dont-open">
                  <FiInfo size={32} color="#FF6690" />
                  Não Atendemos <br />
                  fim de semana
                </div>
              }
            </div>

            <a 
              className="contact-button" 
              href={`https://api.whatsapp.com/send?phone=55${+orphanage.whatsapp}&text=${mensagem}`}
              target="_blank" rel="noopener noreferrer">
                <FaWhatsapp size={20} color="#FFF" />
                Entrar em contato
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}