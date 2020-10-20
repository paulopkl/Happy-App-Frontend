import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import mapMarkerImg from '../images/Local.svg';

import '../styles/pages/orphanages-map.css';

import { FiPlus, FiArrowRight } from 'react-icons/fi';

import happyMapIcon from '../utils/mapIcon';
import api from '../services/api';

interface Orphanages {
    id: number;
    name: string;
    // about: string;
    // instructions: string;
    latitude: number;
    longitude: number;
    // open_on_weekends: boolean;
    // opening_hours: string;
    // images: Object[];
}

function OrphanagesMap() {
    const [orphanages, setOrphanages] = useState<Orphanages[]>([]);

    useEffect(() => {
        api.get('orphanages').then(resp => {
            const orphanages = resp.data;
           setOrphanages(orphanages);
           console.log(orphanages);
        });
    }, []);

    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy" />

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong>São Paulo</strong>
                    <span>Sumaré</span>
                </footer>
            </aside>

            {/* <Map center={[-22.820504, -47.266959]} zoom={15} style={{ width: '100%', height: '100%' }}> */}
                {/* <TileLayer url={'https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png'} /> */}
                {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
                {/* <TileLayer url={`http://a.tiles.mapbox.com/v4/mapbox.mapbox-streets-v7/14/4823/6160.mvt?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} /> */}
            <Map center={[-22.820504, -47.266959]} zoom={15} style={{ width: '100%', height: '100%' }}>
                <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />

                {orphanages.map(orph => (
                    <Marker icon={happyMapIcon} position={[orph.latitude, orph.longitude]} key={orph.id}>
                        <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                            {orph.name}
                            <Link to={`/orphanages/${orph.id}`}>
                                <FiArrowRight size={20} color="#fff" />
                            </Link>
                        </Popup>
                    </Marker>
                ))}

            </Map>

            <Link to="/orphanages/create" className="create-orphanage">
                <FiPlus size={32} color="#fff" />
            </Link>
        </div>
    )
}

export default OrphanagesMap;