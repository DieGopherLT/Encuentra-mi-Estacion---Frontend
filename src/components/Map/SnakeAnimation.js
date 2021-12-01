import { useEffect, useRef } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet.polyline.snakeanim/L.Polyline.SnakeAnim.js';

const colorizedLeafletMarker = color => {
    const markerHtmlStyles = `
        background-color: ${ color };
        width: 1.25rem;
        height: 1.25rem;
        display: block;        
        border-radius: 3rem 3rem 0;
        transform: rotate(45deg);
        border: 1px solid #FFFFFF
    `;

    return L.divIcon({
        className: "my-custom-pin",
        iconAnchor: [0, 24],
        labelAnchor: [-6, 0],
        popupAnchor: [0, -36],
        html: `<span style="${markerHtmlStyles}" />`
    });
}

const SnakeAnimation = ({ animatingMap, path, setAnimatingMap }) => {

    const map = useMap();

    const route = useRef(L.featureGroup());

    const polyOptions = {
        color: 'red',
    };

    useEffect(() => {
        if(!animatingMap) {
            return;
        }
        route.current.clearLayers();

        for(let i = 0; i < path.length - 1; i++) {
            const currentStation = path[i];
            const nextStation = path[i + 1];
            const currentStationCoordinates = [currentStation.latitude, currentStation.longitude];
            const nextStationCoordinates = [nextStation.latitude, nextStation.longitude];
            const currentStationName = currentStation.name;

            let markerColor = '#0adeb7';
            if (i === 0) {
                markerColor = '#de0a11';
            }

            const icon = colorizedLeafletMarker(markerColor);

            route.current.addLayer(L.marker(currentStationCoordinates, { title: currentStationName, icon }));
            route.current.addLayer(L.polyline([currentStationCoordinates, nextStationCoordinates], polyOptions));
        }

        const destination = path[path.length - 1];
        const destinationCoordinates = [destination.latitude, destination.longitude];
        const icon = colorizedLeafletMarker('#0ade0e')
        route.current.addLayer(L.marker(destinationCoordinates, { title: destination.name, icon }));

        map.fitBounds(route.current.getBounds());
        map.addLayer(route.current);
        route.current.snakeIn();
        setAnimatingMap(false);
        //eslint-disable-next-line
    }, [animatingMap]);

    return null;
};

export default SnakeAnimation;
