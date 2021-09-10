import React from 'react';
import styled from '@emotion/styled';

const Button = (props) => {
    return (
        <StyledButton
            className={ props.className }
            type={ props.type }
            onClick={ props.onClick }
        >
            { props.children }
        </StyledButton>
    );
};

const StyledButton = styled.button`
    width: 100%;
    padding: 1rem 3rem;
    font-size: 1.6rem;
    border-radius: 1rem;
    border: none;
    color: white;
    transition: background-color .3s ease;

    &:hover {
        cursor: pointer;
    }
`;

export default Button;
