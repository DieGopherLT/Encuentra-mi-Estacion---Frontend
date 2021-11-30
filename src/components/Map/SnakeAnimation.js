import { useEffect, useRef } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet.polyline.snakeanim/L.Polyline.SnakeAnim.js';

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

        for (let i = 0; i < path.length-1; i++) {
            const currentStation = path[i];
            const nextStation = path[i+1];
            const currentCoordinates = [currentStation.latitude, currentStation.longitude];
            const nextCoordinates = [nextStation.latitude, nextStation.longitude];
            route.current.addLayer(L.polyline([currentCoordinates, nextCoordinates], polyOptions));
        }

        map.fitBounds(route.current.getBounds());
        map.addLayer(route.current);
        route.current.snakeIn();
        setAnimatingMap(false);
    }, [animatingMap]);

    return null;
};

export default SnakeAnimation;
