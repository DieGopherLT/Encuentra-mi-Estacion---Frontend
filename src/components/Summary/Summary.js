import React from 'react';
import styled from '@emotion/styled';

import SummaryItem from './SummaryItem';

const Summary = () => {
    return (
        <SummaryContainer>
            <SummaryTitle>Resumen de ruta</SummaryTitle>
            <SummaryItem/>
            <SummaryItem/>
            <SummaryItem/>
            <SummaryItem/>
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
