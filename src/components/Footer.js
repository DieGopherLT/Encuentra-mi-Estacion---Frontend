import React from 'react';
import styled from '@emotion/styled';

const Footer = () => {
    return (
        <StyledFooter>
            <StyledCreatorsParagraph>
                Creado por Diego López Torres,
                Kevin Hernández León y
                Fernando Daniel Vera Meza
            </StyledCreatorsParagraph>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
    padding: 0.5rem;
    background-color: #5f5f5f;
    margin-top: 1rem;
`;

const StyledCreatorsParagraph = styled.p`
    text-align: center;
    color: white;
`

export default Footer;