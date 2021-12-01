import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { FaLongArrowAltDown, FaLongArrowAltRight } from 'react-icons/fa';

const SummaryItem = ({ origin, destination }) => {

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
            <StationParagraph>{ origin }</StationParagraph>
            <ArrowContainer>
                { dimensions.width < 768 && <FaLongArrowAltDown size={ 35 } color="red"/> }
                { dimensions.width >= 768 && <FaLongArrowAltRight size={ 40 } color="red"/> }
            </ArrowContainer>
            <StationParagraph>{ destination }</StationParagraph>
        </FlexContainer>
    );
};

const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0.625rem 0;
    padding: 1.25rem;
    gap: .5rem;
    box-shadow: -9px 11px 13px -6px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: -9px 11px 13px -6px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: -9px 11px 13px -6px rgba(0, 0, 0, 0.75);

    @media (min-width: 768px) {
        gap: 0;
        flex-direction: row;
        justify-content: space-around;
    }
`;

const ArrowContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
`;

const StationParagraph = styled.p`
    flex: 1;
    font-size: 1.625rem;
    font-weight: bold;
    margin: 0;
    text-align: center;
`;

export default SummaryItem;
