import React from 'react';
import styled from '@emotion/styled';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Map = () => {
    return (
        <Container>
            <StyledMap center={ [51.505, -0.09] } zoom={ 13 } scrollWheelZoom={ false }>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={ [51.505, -0.09] }>
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
