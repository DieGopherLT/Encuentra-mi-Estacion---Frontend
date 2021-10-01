import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { FaLongArrowAltDown, FaLongArrowAltRight } from 'react-icons/fa';

const SummaryItem = () => {

    const [dimensions, setDimensions] = useState({
        height: window.innerHeight,
        width: window.innerWidth,
    });

    useEffect(() => {
        function handleResize() {
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth,
            });
        }
        window.addEventListener('resize', handleResize);
    }, []);

    return (
        <FlexContainer>
            <StationParagraph>Periférico Sur</StationParagraph>
            { dimensions.width < 768 && <FaLongArrowAltDown size={ 35 } color="red"/> }
            { dimensions.width >= 768 && <FaLongArrowAltRight size={ 40 } color="red"/> }
            <StationParagraph>Santuario</StationParagraph>
        </FlexContainer>
    );
};

const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0.625rem 0;
    padding: 1.25rem;
    box-shadow: -9px 11px 13px -6px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: -9px 11px 13px -6px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: -9px 11px 13px -6px rgba(0, 0, 0, 0.75);

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-around;
    }
`;

const StationParagraph = styled.p`
    font-size: 1.625rem;
    font-weight: bold;
    margin: 0;
`;

export default SummaryItem;
