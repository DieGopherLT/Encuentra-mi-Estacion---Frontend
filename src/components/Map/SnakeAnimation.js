import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet.polyline.snakeanim/L.Polyline.SnakeAnim.js';

const SnakeAnimation = ({ startedAnimation, locations }) => {

    const map = useMap();

    const polyOptions = {
        color: 'red',
    };

    useEffect(() => {
        if(!startedAnimation) {
            return;
        }
        const [per, san, esp] = locations;
        const route = L.featureGroup([
            L.polyline([per, san], polyOptions),
            L.polyline([san, esp], polyOptions),
        ]);
        map.fitBounds(route.getBounds());
        map.addLayer(route);
        route.snakeIn();
    }, [startedAnimation]);

    return null;
};

export default SnakeAnimation;
