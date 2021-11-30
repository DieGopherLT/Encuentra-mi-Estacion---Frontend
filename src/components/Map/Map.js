import React from 'react';
import styled from '@emotion/styled';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import SnakeAnimation from './SnakeAnimation';

const Map = ({ path, animatingMap, setAnimatingMap }) => {

    return (
        <Container>
            <StyledMap center={ [20.607164920242916, -103.40101280072895] } zoom={ 14 } scrollWheelZoom={ true }>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <SnakeAnimation path={ path } animatingMap={ animatingMap } setAnimatingMap={ setAnimatingMap } />
                <Marker position={ [20.607164920242916, -103.40101280072895] }>
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
