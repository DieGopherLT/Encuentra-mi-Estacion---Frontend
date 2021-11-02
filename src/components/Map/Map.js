import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import SnakeAnimation from './SnakeAnimation';

const Map = () => {

    const [startedAnimation, setStartedAnimation] = useState(false);

    useEffect(() => {
        setTimeout(() => setStartedAnimation(true), 5000);
    }, []);


    const periferico = [20.607164920242916, -103.40101280072895];
    const santuario = [20.613851195003907, -103.39561357214954];
    const espania = [20.62146417068912, -103.38944298270557];

    const locations = [
        periferico,
        santuario,
        espania,
    ];

    return (
        <Container>
            <StyledMap center={ periferico } zoom={ 14 } scrollWheelZoom={ true }>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <SnakeAnimation locations={ locations } startedAnimation={ startedAnimation }/>
                <Marker position={ periferico }>
                    <Popup>
                        A pretty CSS3 popup. <br/> Easily customizable.
                    </Popup>
                </Marker>
            </StyledMap>
        </Container>
    );
};

const Container = styled.div`
    width: 90%;
    margin: 0 auto;
    
    @media(min-width: 1024px) {
        width: 75rem;
    }
`;

const StyledMap = styled(MapContainer)`
    height: 25rem;
`;

export default Map;
