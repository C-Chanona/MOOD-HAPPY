import { useRef, useEffect } from 'react';

function Map({address}) {
    const mapRef = useRef(null);

    useEffect(() => {
        //crea una instancia del mapa
        const google = window.google;
        const mapNode = mapRef.current;

        const map = new google.maps.Map(mapNode, {
            center: { lat: 16.752703902259334, lng: -93.10651590345086 },
            zoom: 10
        });

        // Crea un marcador
        const marker = new google.maps.Marker({
            position: { lat: 16.752703902259334, lng: -93.10651590345086 },
            map: map,
            title: 'Parque 5 de mayo'
        });
    }, []);

    return <div ref={mapRef} style={{ height: '400px' }} />;
}

export default Map;
