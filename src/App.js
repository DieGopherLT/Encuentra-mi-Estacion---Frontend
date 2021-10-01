import { Fragment, useEffect } from 'react';
import Swal from 'sweetalert2';

import Header from './components/Header';
import Form from './components/Form/Form';
import Map from './components/Map/Map';
import Summary from './components/Summary/Summary';

const App = () => {

    const html = '<strong>Encuentra mi Estación</strong> es una aplicación que le ayudará a llegar a su destino mediante' +
        ' el tren ligero, solo ingrese la estación donde se encuentre o vaya a ir, la estación a la que quiera llegar y' +
        ' nosotros le diremos cual es la mejor forma de llegar a donde desea.';

    useEffect(() => {
        const welcomeModal = async () => {
            const hasVisitedBefore = localStorage.getItem('visited');
            if(!hasVisitedBefore) {
                await Swal.fire({
                    title: '¡Bienvenido a Encuentra mi Estación!',
                    html,
                    confirmButtonText: 'Entendido',
                });
                localStorage.setItem('visited', 'true');
            }
        };
        welcomeModal();
    }, []);

    return (
        <Fragment>
            <Header/>
            <Form/>
            <Map/>
            <Summary/>
        </Fragment>
    );
};

export default App;
