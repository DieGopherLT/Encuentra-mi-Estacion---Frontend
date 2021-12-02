import React from 'react';
import styled from '@emotion/styled';

import SummaryItem from './SummaryItem';

const Summary = ({ path }) => {

    const points = [];
    for (let i = 0; i < path.length - 1; i++) {
        const originName = path[i].name;
        const destinationName = path[i+1].name;
        points.push(<SummaryItem key={ i } origin={ originName } destination={ destinationName } />);
    }

    return (
        <SummaryContainer>
            <SummaryTitle>Resumen de ruta</SummaryTitle>
            { points }
        </SummaryContainer>
    );
};

const SummaryContainer = styled.div`
    width: 90%;
    margin: 0 auto;
    padding: 1.875rem;

    @media (min-width: 1024px) {
        width: 75rem;
    }
`;

const SummaryTitle = styled.h2`
    text-align: center;
`;

export default Summary;
