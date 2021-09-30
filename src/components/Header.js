import React from 'react';
import styled from '@emotion/styled';

const Header = () => {
    return (
        <HeaderContainer>
            <HeaderParagraph>Encuentra mi estación</HeaderParagraph>
        </HeaderContainer>
    );
};

const HeaderContainer = styled.header`
    background-color: #71bbd4;
    padding: 0.625rem 0;
`;

const HeaderParagraph = styled.p`
    color: white;
    margin: 0;
    text-align: center;
    font-size: 1.75rem;
`;

export default Header;
